import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800"><defs><filter id="uuunion-blur" x="-100%" y="-100%" width="400%" height="400%" color-interpolation-filters="sRGB">
        <feGaussianBlur in="SourceGraphic" stdDeviation="11 12.5" result="blur"></feGaussianBlur>
        <feDropShadow stdDeviation="12.307692307692308" in="blur" dx="10" dy="10" flood-color="hsl(30, 4%, 55%)" flood-opacity="0" x="0%" y="0%" width="100%" height="100%"></feDropShadow>
      </filter><filter id="uuunion-blur2" x="-100%" y="-100%" width="400%" height="400%" color-interpolation-filters="sRGB">
        <feGaussianBlur in="SourceGraphic" stdDeviation="11 12.5" result="blur"></feGaussianBlur>
        <feDropShadow stdDeviation="12.307692307692308" in="blur" dx="-10" dy="-10" flood-color="hsl(30, 4%, 55%)" flood-opacity="0" x="0%" y="0%" width="100%" height="100%"></feDropShadow>
      </filter><linearGradient gradientTransform="rotate(0, 0.5, 0.5)" x1="50%" y1="0%" x2="50%" y2="100%" id="uuunion-grad"><stop stop-color="hsl(0, 0%, 100%)" offset="10%"></stop><stop stop-color="hsl(30, 4%, 55%)" offset="90%"></stop></linearGradient><linearGradient gradientTransform="rotate(135, 0.5, 0.5)" x1="50%" y1="0%" x2="50%" y2="100%" id="uuunion-grad2"><stop stop-color="hsl(0, 0%, 100%)" offset="25%"></stop><stop stop-color="hsl(30, 4%, 55%)" offset="100%"></stop></linearGradient><linearGradient gradientTransform="rotate(333, 0.5, 0.5)" x1="50%" y1="0%" x2="50%" y2="100%" id="uuunion-grad3"><stop stop-color="hsl(0, 0%, 100%)" offset="0%"></stop><stop stop-color="hsl(30, 4%, 55%)" offset="75%"></stop></linearGradient></defs><path d="M-79.8 -83.26Q-64.87 -80.12 -49.94 -76.97 -35.01 -74.21 -20.08 -72.22 -5.15 -71.26 9.77 -71.46 24.7 -72.78 39.63 -75.06 54.56 -77.99 69.49 -81.19 84.42 -84.23 99.35 -86.71 114.28 -88.3 129.21 -88.79 144.14 -88.12 159.07 -86.37 174 -83.78 188.93 -80.68 203.86 -77.5 218.79 -74.65 233.72 -72.5 248.65 -71.35 263.58 -71.34 278.51 -72.47 293.44 -74.61 308.37 -77.45 323.3 -80.64 338.23 -83.73 353.16 -86.34 368.09 -88.1 383.02 -88.79 397.95 -88.32 412.88 -86.74 427.81 -84.27 442.74 -81.24 457.67 -78.04 472.6 -75.1 487.53 -72.81 502.46 -71.47 517.39 -71.25 532.32 -72.2 547.25 -74.18 562.18 -76.92 577.11 -80.08 592.04 -83.22 606.97 -85.93 621.9 -87.86 636.83 -88.75 651.76 -88.48 666.69 -87.09 681.62 -84.75 696.55 -81.79 711.48 -78.59 726.41 -75.58 741.34 -73.15 756.27 -71.62 771.2 -71.21 786.13 -71.96 801.06 -73.77 815.99 -76.4 830.92 -79.52 845.85 -82.69 862.32 -79.15 856.84 -57.99 856.8 -43.18 863.73 -28.38 875.56 -13.57 888.72 1.23 899.26 16.03 904 30.84 901.52 45.64 892.57 60.45 879.84 75.25 867.15 90.06 858.33 104.87 856.02 119.67 860.93 134.48 871.57 149.28 884.74 164.09 896.49 178.89 903.28 193.7 903.06 208.5 895.91 223.31 883.97 238.12 870.83 252.92 860.45 267.73 855.95 282.53 858.68 297.34 867.83 312.14 880.63 326.95 893.24 341.75 901.87 356.56 903.92 371.37 898.77 386.17 887.98 400.98 874.78 415.78 863.16 430.59 856.6 445.39 857.07 460.2 864.44 475.01 876.49 489.81 889.59 504.62 899.81 519.42 904.06 534.23 901.08 549.03 891.75 563.84 878.89 578.64 866.36 593.45 857.93 608.26 856.14 623.06 861.52 637.87 872.46 652.67 885.67 667.48 897.17 682.28 903.5 697.09 902.77 711.9 895.18 726.7 883.03 741.51 869.96 756.31 859.91 771.12 855.91 785.92 859.14 800.73 868.65 815.53 881.57 830.34 894.02 845.15 902.25 859.95 886.88 865.46 871.52 872.89 856.16 881.26 840.79 889.46 825.43 896.41 810.07 901.19 794.7 903.16 779.34 902.07 763.98 898.05 748.61 891.65 733.25 883.7 717.88 875.26 702.52 867.45 687.16 861.3 671.79 857.62 656.43 856.91 641.07 859.25 625.7 864.34 610.34 871.5 594.98 879.78 579.61 888.1 564.25 895.34 548.89 900.55 533.52 903.04 518.16 902.48 502.79 898.94 487.43 892.9 472.07 885.15 456.7 876.71 441.34 868.71 425.98 862.21 410.61 858.06 395.25 856.81 379.89 858.63 364.52 863.28 349.16 870.14 333.8 878.31 318.43 886.7 303.07 894.2 287.7 899.82 272.34 902.82 256.98 902.8 241.61 899.76 226.25 894.1 210.89 886.58 195.52 878.18 180.16 870.03 164.8 863.19 149.43 858.58 134.07 856.8 118.71 858.1 103.34 862.29 87.98 868.82 72.61 876.84 57.25 885.27 41.89 893 26.52 899.01 11.16 902.51 -4.19 903.02 -19.56 900.49 -34.92 895.24 -50.28 887.98 -65.65 879.66 -81.01 871.38 -80.64 856.46 -80.07 841.55 -79.48 826.63 -79.04 811.71 -78.9 796.8 -79.08 781.88 -79.54 766.97 -80.13 752.05 -80.69 737.13 -81.03 722.22 -81.07 707.3 -80.78 692.38 -80.25 677.47 -79.65 662.55 -79.15 647.63 -78.91 632.72 -78.99 617.8 -79.37 602.88 -79.94 587.97 -80.53 573.05 -80.96 558.13 -81.09 543.22 -80.9 528.3 -80.43 513.39 -79.84 498.47 -79.29 483.55 -78.95 468.64 -78.93 453.72 -79.23 438.8 -79.76 423.89 -80.36 408.97 -80.85 394.05 -81.09 379.14 -80.99 364.22 -80.6 349.3 -80.02 334.39 -79.44 319.47 -79.02 304.56 -78.9 289.64 -79.1 274.72 -79.58 259.81 -80.18 244.89 -80.72 229.97 -81.05 215.06 -81.06 200.14 -80.75 185.22 -80.21 170.31 -79.61 155.39 -79.12 140.47 -78.9 125.56 -79.01 110.64 -79.41 95.72 -79.99 80.81 -80.57 65.89 -80.98 50.98 -81.09 36.06 -80.87 21.14 -80.39 6.23 -79.79 -8.68 -79.25 -23.6 -78.94 -38.51 -78.94 -53.43 -79.26 -68.35 -79.8 -83.26" fill="url(#uuunion-grad)"></path><path d="M-79.8 -83.26Q-79.26 -68.35 -78.94 -53.43 -78.94 -38.51 -79.25 -23.6 -79.79 -8.68 -80.39 6.23 -80.87 21.14 -81.09 36.06 -80.98 50.98 -80.57 65.89 -79.99 80.81 -79.41 95.72 -79.01 110.64 -78.9 125.56 -79.12 140.47 -79.61 155.39 -80.21 170.31 -80.75 185.22 -81.06 200.14 -81.05 215.06 -80.72 229.97 -80.18 244.89 -79.58 259.81 -79.1 274.72 -78.9 289.64 -79.02 304.56 -79.44 319.47 -80.02 334.39 -80.6 349.3 -80.99 364.22 -81.09 379.14 -80.85 394.05 -70.65 397.82 -60.44 401.71 -50.24 405.5 -40.03 408.97 -29.83 411.9 -19.62 414.13 -0.5 415.87 2.8 415.98 15.7 408.67 28.59 400.02 41.43 390.25 54.15 379.7 66.71 368.77 79.08 357.9 91.23 347.5 103.15 337.95 114.86 329.54 126.39 322.45 137.78 316.75 149.1 312.36 160.42 309.11 171.83 306.69 183.41 304.76 195.24 302.9 207.38 300.73 219.89 297.86 232.81 294.01 246.12 288.96 259.83 282.61 273.88 275.01 288.2 266.28 302.7 256.67 317.28 246.49 331.8 236.12 346.14 225.93 360.18 216.28 373.8 207.47 386.92 199.73 399.46 193.17 411.38 187.81 422.69 183.55 433.41 180.19 443.61 177.45 453.39 175.01 462.9 172.51 472.27 169.61 481.69 166.02 491.33 161.49 501.36 155.89 511.93 149.17 523.19 141.39 535.21 132.71 548.08 123.37 561.78 113.65 576.31 103.89 591.56 94.39 607.41 85.46 623.7 77.33 640.24 70.15 656.8 64 673.15 58.85 689.08 54.59 704.38 51.01 718.86 47.86 732.4 44.86 744.89 41.69 756.3 38.09 766.65 33.82 776.04 28.71 784.59 22.67 792.5 15.7 800 7.88 786.71 -9.82 778.82 -27.53 779.51 -45.23 788.51 -62.94 802.17 -80.65 814.95 -98.35 821.66 -116.06 819.58 -133.77 804.33 -132.45 789.07 -132.11 773.82 -132.81 758.56 -134.44 743.31 -136.81 728.05 -139.58 712.8 -142.42 697.54 -144.93 682.29 -146.8 667.04 -147.78 651.78 -147.75 636.53 -146.69 621.27 -144.77 606.02 -142.22 590.76 -139.38 575.51 -136.62 560.25 -134.3 545 -132.72 529.74 -132.1 514.49 -132.51 499.23 -133.9 483.98 -136.08 468.73 -138.78 453.47 -141.63 438.22 -144.28 422.96 -146.36 407.71 -147.61 392.45 -147.86 377.2 -147.09 361.94 -145.39 346.69 -142.98 331.43 -140.19 316.18 -137.36 300.92 -134.89 285.67 -133.08 270.42 -132.17 255.16 -132.29 239.91 -133.42 224.65 -135.4 209.4 -137.99 194.14 -140.83 178.89 -143.57 163.63 -145.84 148.38 -147.35 133.12 -147.89 117.87 -147.41 102.61 -145.95 87.36 -143.71 72.11 -140.99 56.85 -138.14 41.6 -135.53 26.34 -133.5 11.09 -132.33 -4.16 -132.15 -19.41 -133 -34.67 -134.77 -49.92 -137.21 -65.18 -140.03 -80.43 -142.83 -95.69 -145.27 -110.94 -147.02 -126.19 -147.84 -136.44 -134.75 -118.66 -118 -108.86 -109.87 -99.08 -101.33 -89.38 -92.44 -79.8 -83.26" fill="url(#uuunion-grad2)" filter="url(#uuunion-blur)"></path><path d="M817.13 412.61Q827.34 409.86 837.54 406.52 847.75 402.8 857.95 398.92 868.16 395.09 878.36 391.56 888.27 394.75 874.78 415.78 863.16 430.59 856.6 445.39 857.07 460.2 864.44 475.01 876.49 489.81 889.59 504.62 899.81 519.42 904.06 534.23 901.08 549.03 891.75 563.84 878.89 578.64 866.36 593.45 857.93 608.26 856.14 623.06 861.52 637.87 872.46 652.67 885.67 667.48 897.17 682.28 903.5 697.09 902.77 711.9 895.18 726.7 883.03 741.51 869.96 756.31 859.91 771.12 855.91 785.92 859.14 800.73 868.65 815.53 881.57 830.34 894.02 845.15 902.25 859.95 888.15 864.92 874.05 871.57 859.95 879.16 845.85 886.85 831.75 893.77 817.65 899.15 803.55 902.39 789.45 903.13 775.35 901.29 761.25 897.07 747.16 890.94 733.06 883.59 718.96 875.84 704.86 868.55 690.76 862.54 676.66 858.48 662.56 856.82 648.46 857.75 634.36 861.16 620.26 866.68 606.16 873.68 592.06 881.39 577.96 888.94 563.86 895.5 549.77 900.32 535.67 902.87 521.57 902.87 507.47 900.31 493.37 895.49 479.27 888.93 465.17 881.38 451.07 873.67 436.97 866.67 422.87 861.16 408.77 857.75 394.67 856.82 380.57 858.48 366.48 862.55 352.38 868.56 338.28 875.85 324.18 883.6 310.08 890.95 295.98 897.08 281.88 901.3 267.78 903.14 253.68 902.39 239.58 899.14 225.48 893.76 211.38 886.84 197.28 879.15 183.18 871.56 169.09 864.91 154.99 859.95 140.89 857.22 126.79 857.04 112.69 859.42 98.59 864.1 84.49 870.55 70.39 878.06 56.29 885.78 42.19 892.86 28.09 898.5 6.85 897.56 -0.58 882.89 -0.93 872.74 -1.29 862.59 -1.6 852.44 -1.84 842.29 -1.71 827.07 -0.97 822 11.3 814.64 23.71 805.38 36.28 794.5 49.03 782.44 61.98 769.74 75.09 757.02 88.36 744.85 101.72 733.78 115.13 724.24 128.5 716.52 141.78 710.75 154.88 706.85 167.74 704.6 180.31 703.61 192.56 703.39 204.45 703.38 216 703 227.23 701.71 238.21 699.08 248.99 694.77 259.68 688.63 270.38 680.67 281.2 671.05 292.26 660.1 303.65 648.27 315.48 636.07 327.8 624.06 340.67 612.77 354.09 602.65 368.06 594.05 382.51 587.16 397.36 582.03 412.5 578.54 427.79 576.42 443.08 575.27 458.2 574.62 473 573.95 487.33 572.75 501.07 570.55 514.1 567 526.38 561.86 537.87 555.05 548.61 546.63 558.65 536.82 568.1 525.96 577.11 514.49 585.86 502.89 594.55 491.65 603.39 481.24 612.58 472.01 622.33 464.24 632.81 458.05 644.17 453.41 656.48 450.17 669.81 448.02 684.14 446.58 699.4 445.4 715.47 444.01 732.18 441.97 749.32 438.9 766.64 434.51 783.9 428.66 800.81 421.32 817.13 412.61 817.13 412.61 817.13 412.61" fill="url(#uuunion-grad3)" filter="url(#uuunion-blur2)"></path></svg>`;
  const svgBackground = `data:image/svg+xml,${encodeURIComponent(svgCode)}`;

  return (
    <>
      {/* Burger Menu Button */}
      <button
        onClick={toggleSidebar}
        className="absolute  top-2 left-4 z-[60] md:hidden text-gray-600 hover:text-blue-500 border-white"
      >
        {isSidebarOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      <div
        className={`fixed top-0 left-0 h-full text-xs bg-cover bg-no-repeat bg-center shadow-lg transition-transform duration-300 ease-in-out w-64 z-50
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0`}
        style={{ backgroundImage: `url("${svgBackground}")` }}
      >
        <div className="flex flex-col ">
          <div>
            <img
              className="rounded-3xl mx-auto mt-8 w-36 h-36 object-cover"
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Profile-pic"
            />
            <h1 className="text-2xl font-bold text-center mt-4">
              Jackson Ford
            </h1>
            <p className="text-gray-600 mb-4 self-center text-center mt-1">
              <span className="text-blue-500">UI/UX DESIGNER </span>IN
              PHILIPPINES
            </p>
          </div>
          <nav className="w-full">
            <ul className="flex flex-col items-center space-y-1">
              <li className="w-full text-center">
                <Link
                  to="/"
                  className="block py-2 hover:text-blue-500"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  HOME
                </Link>
              </li>
              <li className="w-full text-center">
                <Link
                  to="/about"
                  className="block py-2 hover:text-blue-500"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  ABOUT
                </Link>
              </li>
              <li className="w-full text-center">
                <Link
                  to="/skills"
                  className="block py-2 hover:text-blue-500"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  SKILLS
                </Link>
              </li>
              <li className="w-full text-center">
                <Link
                  to="/experience"
                  className="block py-2 hover:text-blue-500"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  EXPERIENCE
                </Link>
              </li>
              <li className="w-full text-center">
                <Link
                  to="/work"
                  className="block py-2 hover:text-blue-500"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  WORK
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
