#
# Copyright (c) 2018-2020 Helge Eichhorn and the AstroBase.jl contributors
#
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.
#

using LinearAlgebra: cross, norm
import ..Time: seconds

export kepler, period

function period(a, μ)
    2π * sqrt(abs(a)^3/μ) * seconds
end

function kepler(μ, r₀, v₀, Δt, numiter=50, rtol=sqrt(eps()))
    if abs(Δt) < rtol
        return r₀, v₀
    end

    rm = norm(r₀)
    rdv = r₀ ⋅ v₀
    vdv = v₀ ⋅ v₀
    α = -vdv / μ + 2 /rm

    # Elliptic orbit
    if α > rtol
        # For α == 1 the first guess will be too close to converge
        if α ≈ 1
            χ₁ = √μ * Δt * α * 0.97
        else
            χ₁ = √μ * Δt * α
        end
    # Parabolic orbit
    elseif abs(α) < rtol
        h = cross(r₀, v₀)
        hm = norm(h)
        p = hm^2 / μ
        s = 0.5 * (π/2 - atan(3 * sqrt(μ / p^3) * Δt))
        w = atan(tan(s)^(1/3))
        χ₁ = √p * (2 * cot(2 * w))
        # TODO: Check if this is necessary.
        #= α = 0.0 =#
    # Hyperbolic orbit
    else
        a = 1/α
        χ₁ = (sign(Δt) * sqrt(-a)
            * log(-2 * μ * Δt
            / (a * (rdv + sign(Δt) * sqrt(-μ * α) * (1 - rm * alpha)))))
    end

    counter = 0
    converged = false
    χ = 0.0
    c₂ = 0.0
    c₃ = 0.0
    r = 0.0
    ψ = 0.0
    while counter < numiter
        counter += 1
        χ = χ₁
        χ² = χ^2
        ψ = χ² * α
        c₂ = c2(ψ)
        c₃ = c3(ψ)
        r = χ²*c₂ + rdv / √μ * χ * (1 - ψ * c₃) + rm * (1 - ψ * c₂)
        δt = χ^3 * c₃ + rdv / √μ * χ² * c₂ + rm * χ * (1 - ψ * c₃)
        χ₁ = χ + (Δt * √μ - δt) / r
        if abs(χ - χ₁) < rtol
            converged = true
            break
        end
    end

    if !converged
        error("Not converged.")
    end

    f = 1 - χ^2 / rm * c₂
    g = Δt - χ^3 / √μ * c₃
    fdot = √μ / (r * rm) * χ * (ψ * c₃ - 1)
    gdot = 1 - χ^2 / r * c₂
    @assert f * gdot - fdot * g ≈ 1

    return f * r₀ + g * v₀, fdot * r₀ + gdot * v₀
end
