var documenterSearchIndex = {"docs":
[{"location":"modules/coords/#Coordinates-1","page":"Coordinates","title":"Coordinates","text":"","category":"section"},{"location":"modules/coords/#","page":"Coordinates","title":"Coordinates","text":"DocTestSetup = quote\n    using AstroBase\nend","category":"page"},{"location":"modules/coords/#","page":"Coordinates","title":"Coordinates","text":"Modules = [AstroBase.Coords]\nPrivate = false","category":"page"},{"location":"modules/coords/#","page":"Coordinates","title":"Coordinates","text":"DocTestSetup = nothing","category":"page"},{"location":"modules/interfaces/#Interfaces-1","page":"Interfaces","title":"Interfaces","text":"","category":"section"},{"location":"modules/interfaces/#","page":"Interfaces","title":"Interfaces","text":"DocTestSetup = quote\n    using AstroBase\nend","category":"page"},{"location":"modules/interfaces/#","page":"Interfaces","title":"Interfaces","text":"Modules = [AstroBase.Interfaces]\nPrivate = false","category":"page"},{"location":"modules/interfaces/#AstroBase.Interfaces.AbstractEphemeris","page":"Interfaces","title":"AstroBase.Interfaces.AbstractEphemeris","text":"AbstractEphemeris\n\nAbstract supertype for ephemerides.\n\n\n\n\n\n","category":"type"},{"location":"modules/interfaces/#AstroBase.Interfaces.AbstractFrame","page":"Interfaces","title":"AstroBase.Interfaces.AbstractFrame","text":"AbstractFrame\n\nAbstract supertype for all reference frames.\n\n\n\n\n\n","category":"type"},{"location":"modules/interfaces/#AstroBase.Interfaces.InertialFrame","page":"Interfaces","title":"AstroBase.Interfaces.InertialFrame","text":"InertialFrame\n\nAbstract supertype for (pseudo-)inertial reference frames.\n\n\n\n\n\n","category":"type"},{"location":"modules/interfaces/#AstroBase.Interfaces.RotatingFrame","page":"Interfaces","title":"AstroBase.Interfaces.RotatingFrame","text":"RotatingFrame\n\nAbstract supertype for rotating reference frames.\n\n\n\n\n\n","category":"type"},{"location":"modules/interfaces/#AstroBase.Interfaces.isinertial-Tuple{InertialFrame}","page":"Interfaces","title":"AstroBase.Interfaces.isinertial","text":"isinertial(frame)\n\nReturn true if frame is a (pseudo-)inertial reference frame.\n\n\n\n\n\n","category":"method"},{"location":"modules/interfaces/#AstroBase.Interfaces.isrotating-Tuple{RotatingFrame}","page":"Interfaces","title":"AstroBase.Interfaces.isrotating","text":"isrotating(frame)\n\nReturn true if frame is a rotating reference frame.\n\n\n\n\n\n","category":"method"},{"location":"modules/interfaces/#","page":"Interfaces","title":"Interfaces","text":"DocTestSetup = nothing","category":"page"},{"location":"modules/earth_attitude/#Earth-Attitude-1","page":"Earth Attitude","title":"Earth Attitude","text":"","category":"section"},{"location":"modules/earth_attitude/#","page":"Earth Attitude","title":"Earth Attitude","text":"DocTestSetup = quote\n    using AstroBase\nend","category":"page"},{"location":"modules/earth_attitude/#","page":"Earth Attitude","title":"Earth Attitude","text":"Modules = [AstroBase.EarthAttitude]\nPrivate = false","category":"page"},{"location":"modules/earth_attitude/#AstroBase.EarthAttitude.iau1980","page":"Earth Attitude","title":"AstroBase.EarthAttitude.iau1980","text":"`iau1980`\n\nThe singleton instance of type IAU1980, representing the IAU 1980 family of models.\n\n\n\n\n\n","category":"constant"},{"location":"modules/earth_attitude/#AstroBase.EarthAttitude.iau1982","page":"Earth Attitude","title":"AstroBase.EarthAttitude.iau1982","text":"`iau1982`\n\nThe singleton instance of type IAU1982, representing the IAU 1982 family of models.\n\n\n\n\n\n","category":"constant"},{"location":"modules/earth_attitude/#AstroBase.EarthAttitude.iau1994","page":"Earth Attitude","title":"AstroBase.EarthAttitude.iau1994","text":"`iau1994`\n\nThe singleton instance of type IAU1994, representing the IAU 1994 family of models.\n\n\n\n\n\n","category":"constant"},{"location":"modules/earth_attitude/#AstroBase.EarthAttitude.iau2000","page":"Earth Attitude","title":"AstroBase.EarthAttitude.iau2000","text":"`iau2000`\n\nThe singleton instance of type IAU2000, representing the IAU 2000 family of models.\n\n\n\n\n\n","category":"constant"},{"location":"modules/earth_attitude/#AstroBase.EarthAttitude.iau2000a","page":"Earth Attitude","title":"AstroBase.EarthAttitude.iau2000a","text":"`iau2000a`\n\nThe singleton instance of type IAU2000A, representing the IAU 2000A family of models.\n\n\n\n\n\n","category":"constant"},{"location":"modules/earth_attitude/#AstroBase.EarthAttitude.iau2000b","page":"Earth Attitude","title":"AstroBase.EarthAttitude.iau2000b","text":"`iau2000b`\n\nThe singleton instance of type IAU2000B, representing the IAU 2000B family of models.\n\n\n\n\n\n","category":"constant"},{"location":"modules/earth_attitude/#AstroBase.EarthAttitude.iau2006","page":"Earth Attitude","title":"AstroBase.EarthAttitude.iau2006","text":"`iau2006`\n\nThe singleton instance of type IAU2006, representing the IAU 2006 family of models.\n\n\n\n\n\n","category":"constant"},{"location":"modules/earth_attitude/#AstroBase.EarthAttitude.iau2006a","page":"Earth Attitude","title":"AstroBase.EarthAttitude.iau2006a","text":"`iau2006a`\n\nThe singleton instance of type IAU2006a, representing the IAU 2006A family of models.\n\n\n\n\n\n","category":"constant"},{"location":"modules/earth_attitude/#AstroBase.EarthAttitude.cip_coords-Tuple{AbstractArray{T,2} where T}","page":"Earth Attitude","title":"AstroBase.EarthAttitude.cip_coords","text":"cip_coords(rbpn)\n\nExtract from the bias-precession-nutation matrix the X,Y coordinates of the Celestial Intermediate Pole.\n\nReferences\n\nERFA\n\n\n\n\n\n","category":"method"},{"location":"modules/earth_attitude/#AstroBase.EarthAttitude.nutation","page":"Earth Attitude","title":"AstroBase.EarthAttitude.nutation","text":"nutation(model, ep)\n\nReturn the nutation components for a given epoch and model.\n\nArguments\n\nmodel: IAU model, one of: iau1980, iau2000a, iau2000b, iau2006\nep: An epoch\n\nOutput\n\nδψ: Nutation in longitude (radians)\nδϵ: Nutation in obliquity (radians)\n\nExample\n\njulia> ep = TTEpoch(2020, 1, 1)\n2020-01-01T00:00:00.000 TT\n\njulia> nutation(iau2006, ep)\n(-7.996558232098883e-5, -8.25141288270117e-6)\n\nReferences\n\nSOFA\n\n\n\n\n\n","category":"function"},{"location":"modules/earth_attitude/#AstroBase.EarthAttitude.obliquity","page":"Earth Attitude","title":"AstroBase.EarthAttitude.obliquity","text":"obliquity(model, ep)\n\nReturn the mean obliquity of the ecliptic for a given epoch and model.\n\nArguments\n\nmodel: IAU model, one of: iau1980, iau2006\nep: An epoch\n\nOutput\n\nReturns the angle between the ecliptic and mean equator of date in radians.\n\nExample\n\njulia> ep = TTEpoch(2020, 1, 1)\n2020-01-01T00:00:00.000 TT\n\njulia> obliquity(iau2006, ep)\n0.40904718953841473\n\nReferences\n\nSOFA\n\n\n\n\n\n","category":"function"},{"location":"modules/earth_attitude/#","page":"Earth Attitude","title":"Earth Attitude","text":"DocTestSetup = nothing","category":"page"},{"location":"modules/ephemerides/#Ephemerides-1","page":"Ephemerides","title":"Ephemerides","text":"","category":"section"},{"location":"modules/ephemerides/#","page":"Ephemerides","title":"Ephemerides","text":"DocTestSetup = quote\n    using AstroBase\nend","category":"page"},{"location":"modules/ephemerides/#","page":"Ephemerides","title":"Ephemerides","text":"Modules = [AstroBase.Ephemerides]\nPrivate = false","category":"page"},{"location":"modules/ephemerides/#","page":"Ephemerides","title":"Ephemerides","text":"DocTestSetup = nothing","category":"page"},{"location":"modules/frames/#Reference-Frames-1","page":"Reference Frames","title":"Reference Frames","text":"","category":"section"},{"location":"modules/frames/#","page":"Reference Frames","title":"Reference Frames","text":"DocTestSetup = quote\n    using AstroBase\nend","category":"page"},{"location":"modules/frames/#","page":"Reference Frames","title":"Reference Frames","text":"Modules = [AstroBase.Frames]\nPrivate = false","category":"page"},{"location":"modules/frames/#AstroBase.Frames.cirf","page":"Reference Frames","title":"AstroBase.Frames.cirf","text":"cirf\n\nThe singleton instance of the CIRF type representing the Celestial Intermediate Reference Frame (CIRF).\n\nReference\n\nSOFA\n\n\n\n\n\n","category":"constant"},{"location":"modules/frames/#AstroBase.Frames.icrf","page":"Reference Frames","title":"AstroBase.Frames.icrf","text":"icrf\n\nThe singleton instance of the ICRF type representing the International Celestial Reference Frame (ICRF).\n\nReference\n\nSOFA\n\n\n\n\n\n","category":"constant"},{"location":"modules/frames/#AstroBase.Frames.itrf","page":"Reference Frames","title":"AstroBase.Frames.itrf","text":"itrf\n\nThe singleton instance of the ITRF type representing the International Terrestrial Reference Frame (ITRF).\n\nReference\n\nSOFA\n\n\n\n\n\n","category":"constant"},{"location":"modules/frames/#AstroBase.Frames.tirf","page":"Reference Frames","title":"AstroBase.Frames.tirf","text":"tirf\n\nThe singleton instance of the TIRF type representing the Terrestrial Intermediate Reference Frame (TIRF).\n\nReference\n\nSOFA\n\n\n\n\n\n","category":"constant"},{"location":"modules/frames/#AstroBase.Frames.CIRF","page":"Reference Frames","title":"AstroBase.Frames.CIRF","text":"CIRF\n\nA type representing the Celestial Intermediate Reference Frame (CIRF).\n\nReference\n\nSOFA\n\n\n\n\n\n","category":"type"},{"location":"modules/frames/#AstroBase.Frames.ICRF","page":"Reference Frames","title":"AstroBase.Frames.ICRF","text":"ICRF\n\nA type representing the International Celestial Reference Frame (ICRF).\n\nReference\n\nSOFA\n\n\n\n\n\n","category":"type"},{"location":"modules/frames/#AstroBase.Frames.ITRF","page":"Reference Frames","title":"AstroBase.Frames.ITRF","text":"ITRF\n\nA type representing the International Terrestrial Reference Frame (ITRF).\n\nReference\n\nSOFA\n\n\n\n\n\n","category":"type"},{"location":"modules/frames/#AstroBase.Frames.TIRF","page":"Reference Frames","title":"AstroBase.Frames.TIRF","text":"TIRF\n\nA type representing the Terrestrial Intermediate Reference Frame (TIRF).\n\nReference\n\nSOFA\n\n\n\n\n\n","category":"type"},{"location":"modules/frames/#AstroBase.Frames.@frame-Tuple{Any,Vararg{Any,N} where N}","page":"Reference Frames","title":"AstroBase.Frames.@frame","text":"@frame(name, type=NAMEFrame, parent=nothing, rotating=false)\n\nDefine a new reference frame name which is the singleton instance of type. Optionally provide a parent frame and indicate whether the frame is rotating.\n\nExample\n\njulia> @frame inertial\n\njulia> isinertial(inertial)\ntrue\n\njulia> typeof(inertial)\nINERTIALFrame\n\njulia> @frame rotating type=Rotating parent=inertial rotating=true\n\njulia> isrotating(rotating)\ntrue\n\njulia> typeof(rotating)\nRotating\n\n\n\n\n\n","category":"macro"},{"location":"modules/frames/#","page":"Reference Frames","title":"Reference Frames","text":"DocTestSetup = nothing","category":"page"},{"location":"modules/time/#Astronomical-Time-1","page":"Time","title":"Astronomical Time","text":"","category":"section"},{"location":"modules/time/#","page":"Time","title":"Time","text":"This module is a simple wrapper for AstroTime.jl which offers tools for astronomical time keeping.","category":"page"},{"location":"modules/time/#","page":"Time","title":"Time","text":"DocTestSetup = quote\n    using AstroTime\nend","category":"page"},{"location":"modules/time/#","page":"Time","title":"Time","text":"Modules = [AstroTime]\nPrivate = false","category":"page"},{"location":"modules/time/#AstroTime.@timescale","page":"Time","title":"AstroTime.@timescale","text":"@timescale scale [parent[, oneway]]\n\nDefine a new time scale and the corresponding Epoch type alias.\n\nArguments\n\nscale: The name of the time scale\nparent: The \"parent\" time scale to which it should be linked (optional)\noneway: If true, only the transformation from parent to scale is   registered (optional, default: false)\n\nExample\n\njulia> @timescale GMT UTC\n\njulia> GMT isa TimeScale\ntrue\n\njulia> GMTEpoch\nEpoch{GMTScale,T} where T\n\njulia> find_path(TAI, GMT)\n3-element Array{TimeScale,1}:\n TAI\n UTC\n GMT\n\n\n\n\n\n","category":"macro"},{"location":"modules/time/#","page":"Time","title":"Time","text":"DocTestSetup = nothing","category":"page"},{"location":"modules/two_body/#Two-Body-Problem-1","page":"Two-Body Problem","title":"Two-Body Problem","text":"","category":"section"},{"location":"modules/two_body/#","page":"Two-Body Problem","title":"Two-Body Problem","text":"DocTestSetup = quote\n    using AstroBase\nend","category":"page"},{"location":"modules/two_body/#","page":"Two-Body Problem","title":"Two-Body Problem","text":"Modules = [AstroBase.TwoBody]\nPrivate = false","category":"page"},{"location":"modules/two_body/#AstroBase.TwoBody.transform-NTuple{4,Any}","page":"Two-Body Problem","title":"AstroBase.TwoBody.transform","text":"transform(from, to, a, ecc)\n\nTransform anomaly a from one anomaly type to another for an orbit with eccentricity ecc.\n\nArguments\n\nfrom, to: Anomaly types\ntrue_anomaly\neccentric_anomaly\nmean_anomaly\na: Current value of the anomaly\necc: Eccentricity of the orbit\n\nOutput\n\nReturns the transformed anomaly.\n\nReferences\n\nFarnocchia, Davide, Davide Bracali Cioci, and Andrea Milani.   \"Robust resolution of Kepler’s equation in all eccentricity regimes.\"   Celestial Mechanics and Dynamical Astronomy 116, no. 1 (2013): 21-34.\n\n\n\n\n\n","category":"method"},{"location":"modules/two_body/#","page":"Two-Body Problem","title":"Two-Body Problem","text":"DocTestSetup = nothing","category":"page"},{"location":"modules/bodies/#Celestial-Bodies-1","page":"Celestial Bodies","title":"Celestial Bodies","text":"","category":"section"},{"location":"modules/bodies/#","page":"Celestial Bodies","title":"Celestial Bodies","text":"DocTestSetup = quote\n    using AstroBase\nend","category":"page"},{"location":"modules/bodies/#","page":"Celestial Bodies","title":"Celestial Bodies","text":"Modules = [AstroBase.Bodies]\nPrivate = false","category":"page"},{"location":"modules/bodies/#","page":"Celestial Bodies","title":"Celestial Bodies","text":"DocTestSetup = nothing","category":"page"},{"location":"modules/constants/#Constants-1","page":"Constants","title":"Constants","text":"","category":"section"},{"location":"modules/constants/#","page":"Constants","title":"Constants","text":"DocTestSetup = quote\n    using AstroBase\nend","category":"page"},{"location":"modules/constants/#","page":"Constants","title":"Constants","text":"Modules = [AstroBase.Constants]\nPrivate = false","category":"page"},{"location":"modules/constants/#AstroBase.Constants.astronomical_unit-Tuple{Type{Float64},AstroBase.Constants.Meter}","page":"Constants","title":"AstroBase.Constants.astronomical_unit","text":"astronomical_unit([[T=Float64], unit=km])\n\nReturn the astronomical unit au and the associated uncertainty.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.drift_rate-Tuple{Type{Float64},BarycentricDynamicalTime,BarycentricCoordinateTime}","page":"Constants","title":"AstroBase.Constants.drift_rate","text":"drift_rate([T=Float64,] TDB, TCB)\n\nReturn the rate of drift between TDB and TCB L_B.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.drift_rate-Tuple{Type{Float64},GeocentricCoordinateTime,BarycentricCoordinateTime}","page":"Constants","title":"AstroBase.Constants.drift_rate","text":"drift_rate([T=Float64,] TCG, TCB)\n\nReturn the rate of drift between TCG and TCB L_C and the associated uncertainty.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.drift_rate-Tuple{Type{Float64},TerrestrialTime,GeocentricCoordinateTime}","page":"Constants","title":"AstroBase.Constants.drift_rate","text":"drift_rate([T=Float64,] TT, TCG)\n\nReturn the rate of drift between TT and TCG L_G.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.earth_rotation_angle_j2000-Tuple{Type{Float64}}","page":"Constants","title":"AstroBase.Constants.earth_rotation_angle_j2000","text":"earth_rotation_angle_j2000([T=Float64])\n\nReturn the Earth rotation angle at J2000.0 theta_0.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.earth_rotation_rate-Tuple{Type{Float64}}","page":"Constants","title":"AstroBase.Constants.earth_rotation_rate","text":"earth_rotation_rate([T=Float64])\n\nReturn the rate of advance of Earth rotation angle dthetadUT1.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.equatorial_radius_earth-Tuple{Type{Float64},AstroBase.Constants.Meter}","page":"Constants","title":"AstroBase.Constants.equatorial_radius_earth","text":"equatorial_radius_earth([[T=Float64], unit=km])\n\nReturn the equatorial radius of Earth a_E and the associated uncertainty.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.gaussian_gravitational_const-Tuple{Type{Float64}}","page":"Constants","title":"AstroBase.Constants.gaussian_gravitational_const","text":"gaussian_gravitational_const([T=Float64])\n\nReturn the Gaussian gravitational constant k.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.geocentric_gravitational_const-Tuple{Type{Float64},BarycentricCoordinateTime,AstroBase.Constants.Meter}","page":"Constants","title":"AstroBase.Constants.geocentric_gravitational_const","text":"geocentric_gravitational_const([[[T=Float64], scale=TDB], unit=km])\n\nReturn the geocentric gravitational constant GM_E and the associated uncertainty.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.geoid_potential-Tuple{Type{Float64},AstroBase.Constants.Meter}","page":"Constants","title":"AstroBase.Constants.geoid_potential","text":"geoid_potential([T=Float64])\n\nReturn J_2 dynamical form factor of Earth and the associated uncertainty.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.gravitational_const-Tuple{Type{Float64},AstroBase.Constants.Meter}","page":"Constants","title":"AstroBase.Constants.gravitational_const","text":"gravitational_const([[T=Float64], unit=km])\n\nReturn the gravitational constant G and the associated uncertainty.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.heliocentric_gravitational_const-Tuple{Type{Float64},BarycentricCoordinateTime,AstroBase.Constants.Meter}","page":"Constants","title":"AstroBase.Constants.heliocentric_gravitational_const","text":"heliocentric_gravitational_const([[[T=Float64], scale=TDB], unit=km])\n\nReturn the heliocentric gravitational constant GM_S and the associated uncertainty.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.j2_factor_earth-Tuple{Type{Float64}}","page":"Constants","title":"AstroBase.Constants.j2_factor_earth","text":"j2_factor_earth([T=Float64])\n\nReturn J_2 dynamical form factor of Earth and the associated uncertainty.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.j2_rate_earth-Tuple{Type{Float64}}","page":"Constants","title":"AstroBase.Constants.j2_rate_earth","text":"j2_rate_earth([T=Float64])\n\nReturn the time rate of change in J_2 of Earth and the associated uncertainty.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.mass_ratio_ceres-Tuple{Type{Float64}}","page":"Constants","title":"AstroBase.Constants.mass_ratio_ceres","text":"mass_ratio_ceres([T=Float64])\n\nReturn the ratio of the mass of Ceres to the mass of the Sun M_CeresM_S and the associated uncertainty.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.mass_ratio_eris-Tuple{Type{Float64}}","page":"Constants","title":"AstroBase.Constants.mass_ratio_eris","text":"mass_ratio_eris([T=Float64])\n\nReturn the ratio of the mass of the Sun to the mass of Eris M_SM_Eris and the associated uncertainty.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.mass_ratio_jupiter-Tuple{Type{Float64}}","page":"Constants","title":"AstroBase.Constants.mass_ratio_jupiter","text":"mass_ratio_jupiter([T=Float64])\n\nReturn the ratio of the mass of the Sun to the mass of Jupiter M_SM_J and the associated uncertainty.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.mass_ratio_mars-Tuple{Type{Float64}}","page":"Constants","title":"AstroBase.Constants.mass_ratio_mars","text":"mass_ratio_mars([T=Float64])\n\nReturn the ratio of the mass of the Sun to the mass of Mars M_SM_Ma and the associated uncertainty.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.mass_ratio_mercury-Tuple{Type{Float64}}","page":"Constants","title":"AstroBase.Constants.mass_ratio_mercury","text":"mass_ratio_mercury([T=Float64])\n\nReturn the ratio of the mass of the Sun to the mass of Mercury M_SM_Me and the associated uncertainty.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.mass_ratio_moon-Tuple{Type{Float64}}","page":"Constants","title":"AstroBase.Constants.mass_ratio_moon","text":"mass_ratio_moon([T=Float64])\n\nReturn the ratio of the mass of the Moon to the mass of Earth M_MM_E and the associated uncertainty.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.mass_ratio_neptune-Tuple{Type{Float64}}","page":"Constants","title":"AstroBase.Constants.mass_ratio_neptune","text":"mass_ratio_neptune([T=Float64])\n\nReturn the ratio of the mass of the Sun to the mass of Neptune M_SM_N and the associated uncertainty.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.mass_ratio_pallas-Tuple{Type{Float64}}","page":"Constants","title":"AstroBase.Constants.mass_ratio_pallas","text":"mass_ratio_pallas([T=Float64])\n\nReturn the ratio of the mass of Pallas to the mass of the Sun M_PallasM_S and the associated uncertainty.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.mass_ratio_pluto-Tuple{Type{Float64}}","page":"Constants","title":"AstroBase.Constants.mass_ratio_pluto","text":"mass_ratio_pluto([T=Float64])\n\nReturn the ratio of the mass of the Sun to the mass of Pluto M_SM_P and the associated uncertainty.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.mass_ratio_saturn-Tuple{Type{Float64}}","page":"Constants","title":"AstroBase.Constants.mass_ratio_saturn","text":"mass_ratio_saturn([T=Float64])\n\nReturn the ratio of the mass of the Sun to the mass of Saturn M_SM_Sa and the associated uncertainty.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.mass_ratio_uranus-Tuple{Type{Float64}}","page":"Constants","title":"AstroBase.Constants.mass_ratio_uranus","text":"mass_ratio_uranus([T=Float64])\n\nReturn the ratio of the mass of the Sun to the mass of Uranus M_SM_U and the associated uncertainty.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.mass_ratio_venus-Tuple{Type{Float64}}","page":"Constants","title":"AstroBase.Constants.mass_ratio_venus","text":"mass_ratio_venus([T=Float64])\n\nReturn the ratio of the mass of the Sun to the mass of Venus M_SM_Ve and the associated uncertainty.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.mass_ratio_vesta-Tuple{Type{Float64}}","page":"Constants","title":"AstroBase.Constants.mass_ratio_vesta","text":"mass_ratio_vesta([T=Float64])\n\nReturn the ratio of the mass of Vesta to the mass of the Sun M_VestaM_S and the associated uncertainty.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.mean_angular_velocity_earth-Tuple{Type{Float64}}","page":"Constants","title":"AstroBase.Constants.mean_angular_velocity_earth","text":"mean_angular_velocity_earth([T=Float64])\n\nReturn nominal mean angular velocity of Earth omega.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.obliquity_j2000-Tuple{Type{Float64}}","page":"Constants","title":"AstroBase.Constants.obliquity_j2000","text":"obliquity_j2000([T=Float64])\n\nReturn the ratio of the mass of the Moon to the mass of Earth M_MM_E and the associated uncertainty.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.speed_of_light-Tuple{Type{Float64},AstroBase.Constants.Meter}","page":"Constants","title":"AstroBase.Constants.speed_of_light","text":"speed_of_light([[T=Float64], unit=km])\n\nReturn the speed of light c.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#AstroBase.Constants.tdb0-Tuple{Type{Float64}}","page":"Constants","title":"AstroBase.Constants.tdb0","text":"tdb0([T=Float64])\n\nReturn TDB–TCB at T0.\n\nReference\n\nLuzum, Brian, et al. \"The IAU 2009 system of astronomical constants: the report of the   IAU working group on numerical standards for Fundamental Astronomy.\"   Celestial Mechanics and Dynamical Astronomy 110.4 (2011): 293.\n\n\n\n\n\n","category":"method"},{"location":"modules/constants/#","page":"Constants","title":"Constants","text":"DocTestSetup = nothing","category":"page"},{"location":"modules/util/#Utilities-1","page":"Utilities","title":"Utilities","text":"","category":"section"},{"location":"modules/util/#","page":"Utilities","title":"Utilities","text":"DocTestSetup = quote\n    using AstroBase\nend","category":"page"},{"location":"modules/util/#","page":"Utilities","title":"Utilities","text":"Modules = [AstroBase.Util]\nPrivate = false","category":"page"},{"location":"modules/util/#AstroBase.Util.days_to_hms-Tuple{Any}","page":"Utilities","title":"AstroBase.Util.days_to_hms","text":"days_to_hms(days)\n\nSplit days into hours, minutes, and seconds.\n\nExample\n\njulia> days_to_hms(0.314159)\n(7, 32, 23.337600000000265)\n\n\n\n\n\n","category":"method"},{"location":"modules/util/#AstroBase.Util.deg_to_dms-Tuple{Any}","page":"Utilities","title":"AstroBase.Util.deg_to_dms","text":"deg_to_dms(x)\n\nSplit x into degrees, arcminutes, and arcseconds.\n\nExample\n\njulia> deg_to_dms(90.314159)\n(90, 18, 50.97240000001307)\n\n\n\n\n\n","category":"method"},{"location":"modules/util/#AstroBase.Util.deg_to_rad-Tuple{Any}","page":"Utilities","title":"AstroBase.Util.deg_to_rad","text":"deg_to_rad(x)\n\nConvert x from degrees to radians.\n\nExample\n\n```jldoctest julia> degtorad(90) 1.5707963267948966\n\n\n\n\n\n","category":"method"},{"location":"modules/util/#AstroBase.Util.deg_to_sec-Tuple{Any}","page":"Utilities","title":"AstroBase.Util.deg_to_sec","text":"deg_to_sec(x)\n\nConvert x from degrees to arcseconds.\n\nExample\n\njulia> deg_to_sec(90)\n324000.0\n\n\n\n\n\n","category":"method"},{"location":"modules/util/#AstroBase.Util.dms_to_deg-Tuple{Any,Any,Any}","page":"Utilities","title":"AstroBase.Util.dms_to_deg","text":"dms_to_deg(d, m, s)\n\nConvert degrees d, arcminutes m, and arcseconds s to degrees.\n\nExample\n\njulia> dms_to_deg(90, 18, 50.97240000001307)\n90.314159\n\n\n\n\n\n","category":"method"},{"location":"modules/util/#AstroBase.Util.dms_to_rad-Tuple{Any,Any,Any}","page":"Utilities","title":"AstroBase.Util.dms_to_rad","text":"dms_to_rad(d, m, s)\n\nConvert degrees d, arcminutes m, and arcseconds s to radians.\n\nExample\n\njulia> dms_to_rad(25, 42, 51.42857142857508)\n0.4487989505128276\n\n\n\n\n\n","category":"method"},{"location":"modules/util/#AstroBase.Util.hms_to_days-Tuple{Any,Any,Any}","page":"Utilities","title":"AstroBase.Util.hms_to_days","text":"hms_to_days(h, m, s)\n\nConvert hours h, minutes m, and seconds s to days.\n\nExample\n\njulia> hms_to_days(7, 32, 50.2)\n0.3144699074074074\n\n\n\n\n\n","category":"method"},{"location":"modules/util/#AstroBase.Util.normalize2pi","page":"Utilities","title":"AstroBase.Util.normalize2pi","text":"normalize2pi(angle[, center=0.0])\n\nNormalize angle to be in the interval [center-π, center+π].\n\n\n\n\n\n","category":"function"},{"location":"modules/util/#AstroBase.Util.rad_to_deg-Tuple{Any}","page":"Utilities","title":"AstroBase.Util.rad_to_deg","text":"rad_to_deg(x)\n\nConvert x from radians to degrees.\n\nExample\n\n```jldoctest julia> radtodeg(π/2) 90\n\n\n\n\n\n","category":"method"},{"location":"modules/util/#AstroBase.Util.rad_to_dms-Tuple{Any}","page":"Utilities","title":"AstroBase.Util.rad_to_dms","text":"rad_to_dms(x)\n\nConvert x from radians into degrees, arcminutes, and arcseconds.\n\nExample\n\njulia> rad_to_dms(π/7)\n(25, 42, 51.42857142857508)\n\n\n\n\n\n","category":"method"},{"location":"modules/util/#AstroBase.Util.rad_to_sec-Tuple{Any}","page":"Utilities","title":"AstroBase.Util.rad_to_sec","text":"rad_to_sec(x)\n\nConvert x from radians to arcseconds.\n\nExample\n\njulia> rad_to_sec(π/2)\n324000.0\n\n\n\n\n\n","category":"method"},{"location":"modules/util/#AstroBase.Util.sec_to_deg-Tuple{Any}","page":"Utilities","title":"AstroBase.Util.sec_to_deg","text":"sec_to_deg(x)\n\nConvert x from arcseconds to degrees.\n\nExample\n\njulia> sec_to_deg(324000)\n90.0\n\n\n\n\n\n","category":"method"},{"location":"modules/util/#AstroBase.Util.sec_to_rad-Tuple{Any}","page":"Utilities","title":"AstroBase.Util.sec_to_rad","text":"sec_to_rad(x)\n\nConvert x from arcseconds to radians.\n\nExample\n\njulia> sec_to_rad(324000)\n1.5707963267948966\n\n\n\n\n\n","category":"method"},{"location":"modules/util/#AstroBase.Util.spherical_to_cartesian-Tuple{Any,Any}","page":"Utilities","title":"AstroBase.Util.spherical_to_cartesian","text":"sphericaltocartesian(theta, phi)\n\nConvert spherical coordinates to Cartesian.\n\nArguments\n\ntheta: longitude angle in radians\nphi: latitude angle in radians\n\nReturns\n\nx: magnitude of projection on x axis\ny: magnitude of projection on y axis\nz: magnitude of projection on z axis\n\nReferences\n\nERFA\n\n\n\n\n\n","category":"method"},{"location":"modules/util/#","page":"Utilities","title":"Utilities","text":"DocTestSetup = nothing","category":"page"},{"location":"#AstroBase.jl-1","page":"Home","title":"AstroBase.jl","text":"","category":"section"}]
}
