// import framer motion
import { motion, useInView } from "framer-motion";

// hooks
import { useRef } from "react";

const Loader = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
  <div className="w-full h-screen flex justify-center items-center pointer-events-none absolute bottom-0 right-0">
      <motion.div ref={ref} animate={isInView ? "animate" : ""}>
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        transition={{ delay: 3, duration: 2 }}
      >
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="516.000000pt"
          height="483.000000pt"
          fill="none"
          viewBox="0 0 516.000000 483.000000"
          preserveAspectRatio="xMidYMid meet"
          className="w-[250px] md:w-[500px] lg:w-[1000px]"
        >
          <motion.g
            transform="translate(0.000000,483.000000) scale(0.100000,-0.100000)"
            fill="none"
            stroke="#000"
            strokeWidth={40}
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : ""}
            transition={{ duration: 10 }}
          >
            {/*-------------- circles ------------------*/}
            <motion.path
              fill="none"
              stroke="red"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : ""}
              transition={{ duration: 6 }}
              d="M2410 4781 c-338 -91 -540 -425 -466 -770 46 -212 222 -402 439 -474
96 -31 296 -29 394 5 196 68 354 227 414 418 29 91 35 235 15 330 -49 235
-236 431 -470 491 -92 24 -238 24 -326 0z m317 -192 c157 -53 278 -203 302
-369 27 -199 -74 -387 -258 -478 -74 -36 -77 -37 -196 -37 -120 0 -122 0 -197
38 -168 83 -263 235 -261 417 3 317 310 532 610 429z"
            />
            <motion.path
              fill="none"
              stroke="blue"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : ""}
              transition={{ duration: 6 }}
              d="M450 3545 c-141 -36 -282 -140 -353 -263 -61 -104 -80 -184 -75 -315
4 -99 8 -121 37 -190 68 -159 183 -269 343 -324 302 -105 632 64 728 373 32
104 28 249 -8 353 -60 168 -185 293 -352 351 -81 28 -238 36 -320 15z m291
-208 c159 -76 248 -241 219 -404 -53 -309 -423 -429 -643 -209 -198 198 -122
528 146 627 77 29 202 22 278 -14z"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : ""}
              transition={{ duration: 6 }}
              fill="none"
              stroke="blue"
              d="M4427 3544 c-190 -46 -355 -203 -410 -391 -59 -199 -4 -413 144 -562
226 -229 592 -225 813 9 297 316 149 833 -269 940 -90 23 -194 25 -278 4z
m296 -208 c75 -36 146 -106 183 -181 26 -55 29 -69 29 -165 0 -94 -3 -111 -27
-160 -36 -74 -108 -144 -188 -183 -59 -29 -73 -32 -155 -31 -70 0 -102 5 -145
23 -179 74 -277 271 -224 452 36 122 111 205 233 256 48 20 69 23 146 20 73
-3 101 -9 148 -31z"
            />
            {/*----------------------body-------- */}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : ""}
              transition={{ duration: 10 }}
              d="M2330 3419 c-282 -32 -550 -124 -760 -261 -84 -55 -222 -174 -240
-208 -5 -10 -12 -73 -15 -140 l-5 -123 -87 -37 c-445 -189 -816 -574 -926
-960 -45 -158 -46 -153 20 -257 154 -244 396 -483 688 -681 355 -240 876 -486
1415 -669 74 -25 139 -49 144 -54 5 -4 16 -3 25 2 9 5 88 34 176 65 587 205
1096 453 1450 705 255 181 499 435 633 657 37 60 39 90 16 189 -92 395 -473
803 -939 1003 l-90 39 -5 132 -5 131 -66 63 c-287 271 -706 417 -1189 414 -91
-1 -199 -5 -240 -10z m394 -204 c190 -33 312 -135 339 -282 6 -28 3 -35 -24
-50 -40 -23 -86 -94 -94 -144 -15 -86 22 -173 93 -224 40 -27 51 -30 120 -30
69 0 82 3 122 30 57 38 100 118 100 184 -1 73 -41 145 -105 187 -19 12 -25 25
-25 53 0 30 -24 110 -55 184 -11 27 11 21 121 -32 115 -55 229 -130 292 -190
41 -40 42 -44 42 -104 -1 -581 -250 -1239 -766 -2022 -140 -213 -300 -440
-310 -440 -16 0 -322 451 -456 670 -410 674 -617 1265 -618 1766 l0 97 53 44
c28 25 75 61 104 81 72 50 265 147 294 147 5 0 -4 -26 -20 -57 -16 -32 -37
-74 -45 -93 -9 -19 -34 -57 -56 -85 -71 -90 -92 -193 -66 -323 17 -86 48 -175
71 -205 12 -17 16 -16 64 13 28 18 51 34 51 36 0 3 -11 31 -25 64 -37 89 -52
189 -37 248 14 52 55 117 79 126 24 10 74 -25 110 -75 45 -64 67 -154 60 -251
-7 -85 -9 -82 66 -93 51 -8 51 -8 62 81 18 138 -40 310 -135 398 l-50 47 19
38 c29 56 107 128 176 161 117 58 281 74 449 45z m497 -454 c38 -38 39 -85 4
-124 -54 -58 -155 -19 -155 60 0 46 45 93 90 93 22 0 41 -9 61 -29z m-1876
-368 c50 -288 146 -582 286 -883 156 -336 398 -742 668 -1118 29 -41 50 -76
48 -78 -12 -13 -491 188 -722 302 -531 262 -916 565 -1133 892 -35 53 -35 53
-23 105 60 239 259 502 523 690 74 52 309 186 329 187 4 0 14 -44 24 -97z
m2584 47 c378 -194 661 -503 747 -816 l17 -62 -33 -48 c-230 -339 -584 -621
-1118 -888 -273 -137 -742 -332 -742 -309 0 3 31 49 69 102 348 488 629 995
778 1401 75 204 143 459 159 595 7 60 11 75 20 75 3 0 49 -22 103 -50z"
            />
          </motion.g>
        </svg>
      </motion.div>
    </motion.div>
  </div>
  );
};

export default Loader;