import React from 'react';

// Common stroke properties for sketchy look
const strokeProps = {
  stroke: '#5d4037', // Warm dark brown matching the mockups
  strokeWidth: '1.5',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  fill: 'none'
};

// 1. Whole Spices (Star Anise & Cloves)
export const WholeSpicesSVG = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    {/* Star Anise Center */}
    <circle cx="50" cy="50" r="4" {...strokeProps} />
    {/* 8 Star Anise Petals */}
    <path d="M 50,46 C 47,30 53,30 50,46" {...strokeProps} />
    <path d="M 53,47 C 65,37 69,43 53,47" {...strokeProps} />
    <path d="M 54,50 C 70,50 70,56 54,50" {...strokeProps} />
    <path d="M 53,53 C 65,63 59,69 53,53" {...strokeProps} />
    <path d="M 50,54 C 53,70 47,70 50,54" {...strokeProps} />
    <path d="M 47,53 C 35,63 29,57 47,53" {...strokeProps} />
    <path d="M 46,50 C 30,50 30,44 46,50" {...strokeProps} />
    <path d="M 47,47 C 35,37 41,31 47,47" {...strokeProps} />
    
    {/* Petal Inner Seeds */}
    <ellipse cx="50" cy="38" rx="2" ry="3" fill="#5d4037" />
    <ellipse cx="58" cy="42" rx="3" ry="2" transform="rotate(30 58 42)" fill="#5d4037" />
    <ellipse cx="62" cy="50" rx="3" ry="2" fill="#5d4037" />
    <ellipse cx="58" cy="58" rx="3" ry="2" transform="rotate(-30 58 58)" fill="#5d4037" />
    <ellipse cx="50" cy="62" rx="2" ry="3" fill="#5d4037" />
    <ellipse cx="42" cy="58" rx="3" ry="2" transform="rotate(30 42 58)" fill="#5d4037" />
    <ellipse cx="38" cy="50" rx="3" ry="2" fill="#5d4037" />
    <ellipse cx="42" cy="42" rx="3" ry="2" transform="rotate(-30 42 42)" fill="#5d4037" />

    {/* Cloves beside Star Anise */}
    <path d="M 22,72 L 32,62 M 20,74 L 30,64" {...strokeProps} />
    <path d="M 30,61 C 28,57 34,57 32,61 C 34,63 32,67 30,65 C 28,67 26,63 30,61 Z" fill="none" stroke="#5d4037" strokeWidth="1.2" />
  </svg>
);

// 2. Fresh Rosemary
export const FreshRosemarySVG = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    {/* Main Stem */}
    <path d="M 30,85 C 45,70 55,45 65,20" {...strokeProps} strokeWidth="2" />
    {/* Left Side Needles */}
    <path d="M 40,75 C 32,70 28,68 25,69" {...strokeProps} />
    <path d="M 45,63 C 35,55 30,52 28,54" {...strokeProps} />
    <path d="M 50,51 C 40,43 35,38 32,41" {...strokeProps} />
    <path d="M 55,39 C 45,30 40,26 38,29" {...strokeProps} />
    <path d="M 60,27 C 50,18 48,15 45,17" {...strokeProps} />
    
    {/* Right Side Needles */}
    <path d="M 42,73 C 50,68 55,68 58,70" {...strokeProps} />
    <path d="M 47,60 C 58,54 62,54 66,57" {...strokeProps} />
    <path d="M 52,48 C 65,42 68,43 72,46" {...strokeProps} />
    <path d="M 57,36 C 70,30 72,30 76,33" {...strokeProps} />
    <path d="M 62,24 C 74,18 75,16 78,19" {...strokeProps} />

    {/* Top Needles */}
    <path d="M 65,20 C 67,10 68,8 67,8" {...strokeProps} />
    <path d="M 64,22 C 60,14 58,12 57,13" {...strokeProps} />
  </svg>
);

// 3. Dried Herbs (Pile of leaves/flakes)
export const DriedHerbsSVG = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    {/* Outline mound */}
    <path d="M 20,75 C 35,68 45,63 50,63 C 55,63 65,68 80,75" {...strokeProps} strokeWidth="1" strokeDasharray="2 3" />
    
    {/* Scattered Leaves/Flakes */}
    <path d="M 30,73 C 27,71 28,68 31,70 C 34,72 32,74 30,73" fill="#5d4037" />
    <path d="M 40,68 C 38,65 42,63 43,65 C 44,67 42,69 40,68" fill="#5d4037" />
    <path d="M 50,65 C 48,61 52,60 53,62 C 54,64 52,66 50,65" fill="#5d4037" />
    <path d="M 60,67 C 58,64 62,63 63,65 C 64,67 62,69 60,67" fill="#5d4037" />
    <path d="M 70,72 C 67,70 68,67 71,69 C 74,71 72,73 70,72" fill="#5d4037" />

    {/* Upper Layer */}
    <path d="M 35,70 C 33,67 37,66 38,68 C 39,70 37,71 35,70" fill="#5d4037" />
    <path d="M 45,64 C 43,60 47,59 48,61 C 49,63 47,65 45,64" fill="#5d4037" />
    <path d="M 55,63 C 53,59 57,58 58,60 C 59,62 57,64 55,63" fill="#5d4037" />
    <path d="M 65,68 C 63,65 67,64 68,66 C 69,68 67,69 65,68" fill="#5d4037" />
    
    {/* Peak */}
    <path d="M 48,58 C 46,55 50,54 51,56 C 52,58 50,59 48,58" fill="#5d4037" />
    <path d="M 52,57 C 50,54 54,53 55,55 C 56,57 54,58 52,57" fill="#5d4037" />

    {/* Some single herbs floating */}
    <path d="M 22,60 C 20,58 24,57 23,59" stroke="#5d4037" strokeWidth="1" fill="none" />
    <path d="M 78,62 C 76,60 80,59 79,61" stroke="#5d4037" strokeWidth="1" fill="none" />
  </svg>
);

// 4. Ground Spices (Pile of powder)
export const GroundSpicesSVG = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    {/* Pyramidal Mound Outlines */}
    <path d="M 15,75 C 30,73 35,62 50,35 C 65,62 70,73 85,75" {...strokeProps} strokeWidth="1.5" />
    <path d="M 22,72 C 38,70 42,60 50,45 C 58,60 62,70 78,72" {...strokeProps} strokeWidth="0.8" strokeDasharray="1 2" />
    
    {/* Shadow lines and texture */}
    <path d="M 50,35 L 50,75" {...strokeProps} strokeWidth="0.8" strokeDasharray="3 3" />
    <path d="M 45,55 C 46,62 47,68 46,74" {...strokeProps} strokeWidth="0.8" />
    <path d="M 55,58 C 54,64 53,69 54,74" {...strokeProps} strokeWidth="0.8" />
    <path d="M 38,68 C 41,71 44,73 48,73" {...strokeProps} strokeWidth="0.8" />
    <path d="M 62,68 C 59,71 56,73 52,73" {...strokeProps} strokeWidth="0.8" />
  </svg>
);

// 5. Ginger Roots
export const GingerRootsSVG = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    {/* Main Root Body */}
    <path d="M 20,55 C 20,40 30,35 45,40 C 50,35 60,32 70,38 C 80,42 85,55 80,65 C 75,72 65,75 50,70 C 35,75 22,70 20,55 Z" {...strokeProps} strokeWidth="1.8" />
    
    {/* Offshoots / Knobs */}
    <path d="M 32,38 C 30,25 42,20 48,32" {...strokeProps} />
    <path d="M 68,36 C 72,22 82,25 78,40" {...strokeProps} />
    <path d="M 78,60 C 88,62 90,72 80,75" {...strokeProps} />
    <path d="M 24,62 C 16,68 18,78 28,73" {...strokeProps} />
    
    {/* Ring details (segmented growth rings) */}
    <path d="M 28,45 C 29,48 27,51 26,52" {...strokeProps} strokeWidth="1" />
    <path d="M 38,42 C 40,46 39,50 37,53" {...strokeProps} strokeWidth="1" />
    <path d="M 48,43 C 51,47 50,52 48,56" {...strokeProps} strokeWidth="1" />
    <path d="M 58,42 C 61,46 60,51 57,55" {...strokeProps} strokeWidth="1" />
    <path d="M 68,44 C 70,48 69,53 66,57" {...strokeProps} strokeWidth="1" />
    <path d="M 76,49 C 77,53 75,58 72,61" {...strokeProps} strokeWidth="1" />

    {/* Budding/Growth points */}
    <circle cx="38" cy="24" r="1.5" fill="#5d4037" />
    <circle cx="77" cy="24" r="1.5" fill="#5d4037" />
  </svg>
);

// 6. Cinnamon Sticks
export const CinnamonSticksSVG = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    {/* Stick 1 (Left/Diagonal) */}
    {/* Outer Bark Lines */}
    <path d="M 25,75 L 65,25" {...strokeProps} strokeWidth="2" />
    <path d="M 35,83 L 75,33" {...strokeProps} strokeWidth="2" />
    {/* Curled Ends */}
    <path d="M 25,75 C 20,79 24,85 29,84 C 33,83 34,78 30,79 C 28,80 29,83 32,82 C 34,81 35,83 35,83" {...strokeProps} />
    <path d="M 65,25 C 60,29 64,35 69,34 C 73,33 74,28 70,29 C 68,30 69,33 72,32 C 74,31 75,33 75,33" {...strokeProps} />
    {/* Inner textures */}
    <path d="M 31,73 L 69,27" {...strokeProps} strokeWidth="0.8" />
    <path d="M 29,78 L 67,31" {...strokeProps} strokeWidth="0.8" strokeDasharray="4 2" />

    {/* Stick 2 (Overlapping Right) */}
    <path d="M 40,80 L 80,30" {...strokeProps} strokeWidth="2" />
    <path d="M 48,86 L 88,36" {...strokeProps} strokeWidth="2" />
    {/* Curled Ends */}
    <path d="M 40,80 C 36,83 38,89 43,88 C 47,87 48,82 44,83 C 42,84 43,87 46,86 C 48,85 48,86 48,86" {...strokeProps} />
    <path d="M 80,30 C 76,33 78,39 83,38 C 87,37 88,32 84,33 C 82,34 83,37 86,36 C 88,35 88,36 88,36" {...strokeProps} />
  </svg>
);

// 7. Saffron (Three strands/threads)
export const SaffronSVG = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    {/* Strand 1 (Left curve) */}
    <path d="M 50,85 C 45,65 30,50 25,30" {...strokeProps} strokeWidth="2" />
    {/* Trumpet red tip */}
    <path d="M 25,30 C 22,25 18,28 20,33 C 22,35 25,32 25,30 Z" fill="#5d4037" />

    {/* Strand 2 (Center wavy) */}
    <path d="M 52,85 C 55,60 50,40 55,20" {...strokeProps} strokeWidth="2" />
    <path d="M 55,20 C 58,15 62,18 60,23 C 58,25 55,22 55,20 Z" fill="#5d4037" />

    {/* Strand 3 (Right curve) */}
    <path d="M 54,85 C 60,68 70,55 78,35" {...strokeProps} strokeWidth="2" />
    <path d="M 78,35 C 82,32 84,36 80,40 C 78,42 77,38 78,35 Z" fill="#5d4037" />
    
    {/* Connecting base */}
    <path d="M 48,83 C 52,81 54,81 56,83" {...strokeProps} strokeWidth="2.5" />
  </svg>
);

// 8. Chillies (Red Chilli Pods)
export const ChilliesSVG = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    {/* Chilli 1 (Large curved) */}
    {/* Body */}
    <path d="M 30,30 C 35,28 42,32 45,45 C 50,60 40,75 35,80 C 32,83 29,84 27,80 C 23,73 20,55 24,42 C 26,35 28,31 30,30 Z" {...strokeProps} strokeWidth="1.8" />
    {/* Stem */}
    <path d="M 30,30 C 30,22 35,18 36,15" {...strokeProps} strokeWidth="1.8" />
    {/* Cap */}
    <path d="M 27,33 C 30,31 32,31 34,32" {...strokeProps} strokeWidth="1.8" />
    {/* Texture shading lines */}
    <path d="M 28,45 C 29,55 28,65 31,72" {...strokeProps} strokeWidth="0.8" strokeDasharray="3 2" />

    {/* Chilli 2 (Small overlapping behind) */}
    <path d="M 55,40 C 58,38 65,40 68,50 C 70,60 62,70 58,74 C 55,77 53,77 51,74" {...strokeProps} strokeWidth="1.5" />
    <path d="M 55,40 C 55,34 58,32 59,29" {...strokeProps} strokeWidth="1.5" />
  </svg>
);

// Faint botanical outline background illustration (Hero / Testimonial)
export const BotanicalBackgroundSVG = () => (
  <svg viewBox="0 0 200 200" width="100%" height="100%">
    <path d="M 100,200 C 100,150 90,100 60,40" stroke="#5d4037" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.4" />
    
    {/* Leaf 1 Left */}
    <path d="M 85,150 C 70,145 60,135 62,125 C 65,115 80,120 80,125 C 80,130 83,140 85,150 Z" stroke="#5d4037" strokeWidth="0.6" fill="none" opacity="0.4" />
    <path d="M 85,150 L 74,133" stroke="#5d4037" strokeWidth="0.4" fill="none" opacity="0.4" />

    {/* Leaf 2 Right */}
    <path d="M 87,140 C 102,135 110,125 108,115 C 105,105 90,110 90,115 C 90,120 88,130 87,140 Z" stroke="#5d4037" strokeWidth="0.6" fill="none" opacity="0.4" />
    <path d="M 87,140 L 98,123" stroke="#5d4037" strokeWidth="0.4" fill="none" opacity="0.4" />

    {/* Leaf 3 Left */}
    <path d="M 75,100 C 60,95 50,85 52,75 C 55,65 70,70 70,75 C 70,80 73,90 75,100 Z" stroke="#5d4037" strokeWidth="0.6" fill="none" opacity="0.4" />
    <path d="M 75,100 L 64,83" stroke="#5d4037" strokeWidth="0.4" fill="none" opacity="0.4" />

    <path d="M 77,90 C 92,85 100,75 98,65 C 95,55 80,60 80,65 C 80,70 78,80 77,90 Z" stroke="#5d4037" strokeWidth="0.6" fill="none" opacity="0.4" />
    <path d="M 77,90 L 88,73" stroke="#5d4037" strokeWidth="0.4" fill="none" opacity="0.4" />

    {/* Leaf 5 Top */}
    <path d="M 60,40 C 58,25 65,15 70,18 C 75,20 72,30 60,40 Z" stroke="#5d4037" strokeWidth="0.4" fill="none" opacity="0.4" />
    <path d="M 60,40 L 66,24" stroke="#5d4037" strokeWidth="0.4" fill="none" opacity="0.4" />
  </svg>
);

// 10. Coriander Seeds Cluster Sketch
export const CorianderSketchSVG = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    {/* Seed 1 */}
    <circle cx="50" cy="50" r="14" stroke="#5d4037" strokeWidth="1.2" fill="none" opacity="0.4" />
    <path d="M 50,36 C 45,40 45,60 50,64" stroke="#5d4037" strokeWidth="0.8" fill="none" opacity="0.4" />
    <path d="M 50,36 C 55,40 55,60 50,64" stroke="#5d4037" strokeWidth="0.8" fill="none" opacity="0.4" />
    <path d="M 50,36 C 40,42 40,58 50,64" stroke="#5d4037" strokeWidth="0.7" fill="none" opacity="0.4" />
    <path d="M 50,36 C 60,42 60,58 50,64" stroke="#5d4037" strokeWidth="0.7" fill="none" opacity="0.4" />
    <line x1="50" y1="36" x2="50" y2="64" stroke="#5d4037" strokeWidth="0.6" strokeDasharray="1 1" opacity="0.4" />

    {/* Seed 2 (Top Left) */}
    <g transform="translate(-15, -15)">
      <circle cx="45" cy="45" r="11" stroke="#5d4037" strokeWidth="1.2" fill="none" opacity="0.4" />
      <path d="M 45,34 C 41,37 41,53 45,56" stroke="#5d4037" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M 45,34 C 49,37 49,53 45,56" stroke="#5d4037" strokeWidth="0.8" fill="none" opacity="0.4" />
      <line x1="45" y1="34" x2="45" y2="56" stroke="#5d4037" strokeWidth="0.6" opacity="0.4" />
    </g>

    {/* Seed 3 (Bottom Right) */}
    <g transform="translate(16, 12) rotate(45 48 48)">
      <circle cx="48" cy="48" r="12" stroke="#5d4037" strokeWidth="1.2" fill="none" opacity="0.4" />
      <path d="M 48,36 C 44,39 44,57 48,60" stroke="#5d4037" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M 48,36 C 52,39 52,57 48,60" stroke="#5d4037" strokeWidth="0.8" fill="none" opacity="0.4" />
      <line x1="48" y1="36" x2="48" y2="60" stroke="#5d4037" strokeWidth="0.6" opacity="0.4" />
    </g>

    {/* Seed 4 (Top Right, Small) */}
    <g transform="translate(18, -14)">
      <circle cx="42" cy="42" r="8" stroke="#5d4037" strokeWidth="1.0" fill="none" opacity="0.4" />
      <path d="M 42,34 C 39,36 39,48 42,50" stroke="#5d4037" strokeWidth="0.7" fill="none" opacity="0.4" />
      <path d="M 42,34 C 45,36 45,48 42,50" stroke="#5d4037" strokeWidth="0.7" fill="none" opacity="0.4" />
    </g>
  </svg>
);

// 11. Bay Leaves Sketch
export const BayLeavesSketchSVG = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    {/* Leaf 1 (Back) */}
    <g transform="rotate(-25 50 50) translate(-10, -5)">
      <path d="M 20,50 C 35,35 65,38 80,50 C 65,62 35,65 20,50 Z" stroke="#5d4037" strokeWidth="1.2" fill="none" opacity="0.4" />
      <path d="M 20,50 L 80,50" stroke="#5d4037" strokeWidth="0.8" fill="none" opacity="0.4" />
      {/* Secondary veins */}
      <path d="M 35,50 L 42,42 M 45,50 L 55,41 M 55,50 L 68,43" stroke="#5d4037" strokeWidth="0.6" opacity="0.4" />
      <path d="M 35,50 L 42,58 M 45,50 L 55,59 M 55,50 L 68,57" stroke="#5d4037" strokeWidth="0.6" opacity="0.4" />
    </g>

    {/* Leaf 2 (Front, Overlapping) */}
    <g transform="rotate(15 50 50) translate(5, 5)">
      <path d="M 18,50 C 33,32 67,35 82,50 C 67,65 33,68 18,50 Z" stroke="#5d4037" strokeWidth="1.2" fill="none" opacity="0.4" />
      <path d="M 18,50 L 82,50" stroke="#5d4037" strokeWidth="0.8" fill="none" opacity="0.4" />
      {/* Secondary veins */}
      <path d="M 33,50 L 41,39 M 45,50 L 55,38 M 58,50 L 70,41" stroke="#5d4037" strokeWidth="0.6" opacity="0.4" />
      <path d="M 33,50 L 41,61 M 45,50 L 55,62 M 58,50 L 70,59" stroke="#5d4037" strokeWidth="0.6" opacity="0.4" />
    </g>
  </svg>
);

// 12. Cardamom Pods Sketch
export const CardamomSketchSVG = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    {/* Pod 1 */}
    <path d="M 30,50 C 35,35 65,35 70,50 C 65,65 35,65 30,50 Z" stroke="#5d4037" strokeWidth="1.2" fill="none" opacity="0.4" />
    <path d="M 30,50 C 40,43 60,43 70,50" stroke="#5d4037" strokeWidth="0.8" fill="none" opacity="0.4" />
    <path d="M 30,50 C 40,57 60,57 70,50" stroke="#5d4037" strokeWidth="0.8" fill="none" opacity="0.4" />
    <path d="M 30,50 C 40,47 60,47 70,50" stroke="#5d4037" strokeWidth="0.6" strokeDasharray="2 1" fill="none" opacity="0.4" />
    <path d="M 30,50 C 40,53 60,53 70,50" stroke="#5d4037" strokeWidth="0.6" strokeDasharray="2 1" fill="none" opacity="0.4" />

    {/* Pod 2 (Rotated) */}
    <g transform="rotate(35 55 45) translate(15, -10)">
      <path d="M 35,50 C 39,38 61,38 65,50 C 61,62 39,62 35,50 Z" stroke="#5d4037" strokeWidth="1.2" fill="none" opacity="0.4" />
      <path d="M 35,50 C 43,45 57,45 65,50" stroke="#5d4037" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M 35,50 C 43,55 57,55 65,50" stroke="#5d4037" strokeWidth="0.8" fill="none" opacity="0.4" />
    </g>

    {/* Pod 3 (Small) --> */}
    <g transform="rotate(-25 40 60) translate(-10, 15) scale(0.7)">
      <path d="M 30,50 C 35,35 65,35 70,50 C 65,65 35,65 30,50 Z" stroke="#5d4037" strokeWidth="1.2" fill="none" opacity="0.4" />
      <path d="M 30,50 C 40,43 60,43 70,50" stroke="#5d4037" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M 30,50 C 40,57 60,57 70,50" stroke="#5d4037" strokeWidth="0.8" fill="none" opacity="0.4" />
    </g>
  </svg>
);
