import React, { useEffect, useRef, useState } from "react";

const AutoScrollBox = () => {
  const boxRef = useRef(null); // Ref to the scrollable box
  const itemRef = useRef(null); // Ref to the first item to measure its width
  const [itemWidth, setItemWidth] = useState(0); // State to store the width of an item

  useEffect(() => {
    const box = boxRef.current;

    // Measure the width of the first item
    if (itemRef.current) {
      setItemWidth(itemRef.current.offsetWidth+15);
    }

    // Function to scroll the box
    const scrollBox = () => {
      if (box) {
        // Scroll by the full width of an item
        box.scrollBy({ left: itemWidth, behavior: "smooth" });

        // If scrolled to the end, reset to the start
        if (box.scrollLeft + box.clientWidth >= box.scrollWidth) {
          box.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    };

    // Set an interval to scroll every 3 seconds
    const interval = setInterval(scrollBox, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [itemWidth]); // Re-run effect if itemWidth changes

  return (
    <div
      ref={boxRef}
      className="flex overflow-x-auto my-1 sm:my-3 rounded-lg w-full scrollbar-hide" // Full width and hide scrollbar
    >
      {/* Content inside the box */}
      <div className="flex space-x-4">
        {/* Fixed-size boxes with text wrapping */}
        <div
          ref={itemRef} // Ref to measure the width of this item
          className="bg-purple-500 grid grid-cols-1 sm:grid-cols-2 text-white rounded-lg w-screen h-72 overflow-auto"
          
        >
            <div className="flex justify-center items-center ">
            <img 
                src="/PCOS.webp"
                alt="abc"
                width={450}
                className="bg-blue-400 p-3 rounded-lg"
            />
            </div>
            <div className="flex flex-col pl-1 pt-3 sm:pl-5 ">
          <h1 className="text-2xl sm:text-3xl">Polycystic Ovary Syndrome (PCOS)</h1>
          <p className="text-justify pr-5 pt-1">
          PCOS is one of the most common hormonal disorders affecting young women. It leads to irregular periods, excessive hair growth, acne, weight gain, and infertility. The root cause? A hormonal imbalance that affects ovulation and metabolism. Left untreated, PCOS can increase the risk of diabetes, heart disease, and depression. Treatment includes lifestyle changes, birth control pills, and medications like Metformin to manage symptoms. If you experience persistent acne, irregular cycles, or unexplained weight gain—it’s time to check for PCOS!          </p>
          </div>
        </div>
        

        <div
          ref={itemRef} // Ref to measure the width of this item
          className="bg-purple-500 grid grid-cols-1 sm:grid-cols-2 text-white rounded-lg w-screen h-72 overflow-auto"
        >
            <div className="flex justify-center items-center ">
            <img 
                src="/background 1.webp"
                alt="abc"
                width={450}
                className="bg-blue-400 p-3 rounded-lg"
            />
            </div>
            <div className="flex flex-col pl-1 pt-3 ">
          <h1 className="text-2xl sm:text-3xl">abc</h1>
          <p className="text-justify pr-5 pt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nemo! Velit repellendus hic commodi eos aliquid accusantium exercitationem obcaecati fuga, perspiciatis non 
          </p>
          </div>
        </div>

        <div
          ref={itemRef} // Ref to measure the width of this item
          className="bg-purple-500 grid grid-cols-1 sm:grid-cols-2 text-white rounded-lg w-screen h-72 overflow-auto"
        >
            <div className="flex justify-center items-center ">
            <img 
                src="/background 1.webp"
                alt="abc"
                width={450}
                className="bg-blue-400 p-3 rounded-lg"
            />
            </div>
            <div className="flex flex-col pl-1 pt-3 ">
          <h1 className="text-2xl sm:text-3xl">abc</h1>
          <p className="text-justify pr-5 pt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nemo! Velit repellendus hic commodi eos aliquid accusantium exercitationem obcaecati fuga, perspiciatis non 
          </p>
          </div>
        </div>

        <div
          ref={itemRef} // Ref to measure the width of this item
          className="bg-purple-500 grid grid-cols-1 sm:grid-cols-2 text-white rounded-lg w-screen h-72 overflow-auto "
        >
            <div className="flex justify-center items-center ">
            <img 
                src="/background 1.webp"
                alt="abc"
                width={450}
                className="bg-blue-400 p-3 rounded-lg "
            />
            </div>
            <div className="flex flex-col pl-1 pt-3 ">
          <h1 className="text-2xl sm:text-3xl">abc</h1>
          <p className="text-justify pr-5 pt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nemo! Velit repellendus hic commodi eos aliquid accusantium exercitationem obcaecati fuga, perspiciatis non 
          </p>
          </div>
        </div>

        <div
          ref={itemRef} // Ref to measure the width of this item
          className="bg-purple-500 grid grid-cols-1 sm:grid-cols-2 text-white rounded-lg w-screen h-72 overflow-auto"
        >
            <div className="flex justify-center items-center ">
            <img 
                src="/background 1.webp"
                alt="abc"
                width={450}
                className="bg-blue-400 p-3 rounded-lg"
            />
            </div>
            <div className="flex flex-col pl-1 pt-3 ">
          <h1 className="text-2xl sm:text-3xl">abc</h1>
          <p className="text-justify pr-5 pt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nemo! Velit repellendus hic commodi eos aliquid accusantium exercitationem obcaecati fuga, perspiciatis non itaque, voluptatum quam eum et aut vel esse deleniti sit, ipsam rerum a recusandae 
          </p>
          </div>
        </div>

        <div
          ref={itemRef} // Ref to measure the width of this item
          className="bg-purple-500 grid grid-cols-1 sm:grid-cols-2 text-white rounded-lg w-screen h-72 overflow-auto"
        >
            <div className="flex justify-center items-center ">
            <img 
                src="/background 1.webp"
                alt="abc"
                width={450}
                className="bg-blue-400 p-3 rounded-lg"
            />
            </div>
            <div className="flex flex-col pl-1 pt-3 ">
          <h1 className="text-2xl sm:text-3xl">abc</h1>
          <p className="text-justify pr-5 pt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nemo! Velit repellendus hic commodi eos aliquid accusantium exercitationem obcaecati fuga, perspiciatis non itaque, voluptatum quam eum et aut vel esse deleniti sit, ipsam rerum a recusandae 
          </p>
          </div>
        </div>

        <div
          ref={itemRef} // Ref to measure the width of this item
          className="bg-purple-500 grid grid-cols-1 sm:grid-cols-2 text-white rounded-lg w-screen h-72 overflow-auto"
        >
            <div className="flex justify-center items-center ">
            <img 
                src="/background 1.webp"
                alt="abc"
                width={450}
                className="bg-blue-400 p-3 rounded-lg"
            />
            </div>
            <div className="flex flex-col pl-1 pt-3 ">
          <h1 className="text-2xl sm:text-3xl">abc</h1>
          <p className="text-justify pr-5 pt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nemo! Velit repellendus hic commodi eos aliquid accusantium exercitationem obcaecati fuga, perspiciatis non 
          </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AutoScrollBox;