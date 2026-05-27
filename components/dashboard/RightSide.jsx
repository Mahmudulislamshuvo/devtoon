"use client";

import Image from "next/image";
import { useEffect } from "react";
import { MdHistory } from "react-icons/md";

const RightSide = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".dashboard-sidebar .glass-card");
    const handleMouseMove = (event) => {
      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = (event) => {
      event.currentTarget.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);
  return (
    <aside className="dashboard-sidebar lg:col-span-4 space-y-md">
      <div className="flex items-center justify-between mb-sm">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Recent Stories
        </h2>
        <MdHistory className="text-on-surface-variant" />
      </div>
      <div className="glass-card rounded-xl overflow-hidden">
        <div className="p-md space-y-md">
          {/* Story Item 1 */}
          <div className="flex gap-sm p-sm rounded bg-white/5 border border-transparent hover:border-tertiary/20 transition-all cursor-pointer group">
            <div className="w-16 h-16 rounded overflow-hidden shrink-0 border border-white/10">
              <Image
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                alt="A highly detailed digital illustration of a futuristic cyberpunk city at night with neon blue and cyan lights reflecting on rainy streets. The scene features glowing holographic code floating in the air, creating a technological atmosphere. The art style is crisp and modern with deep contrast and vibrant highlights."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVWbHkgA4yhhjAgu4CtykUME8r-eEy9NXgDS_BnVdGsRwWwYXyzHQUCLk1YS1V2f4BZWR4gQdjZVbRWRDLBVnCIPjElLMBhnfJE1YiOMYDPrpTKgcUKrtUc56muL7JQOjw8nWz0j_-s13c5B-F_DcpMsWK6UPqPNPcA-42Yp1LRy9P-2OT0ja62FKFOai2kVZtEx0gml3rw8aiL0J4VzujRKg-vXld52ck4t7YxYOYVB6dNTbJ7T65xrCabFpeDas1wNimRsW5uB0"
                height={64}
                width={64}
              />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-on-surface font-semibold text-body-md group-hover:text-tertiary transition-colors">
                The Quantum Breach
              </h4>
              <p className="text-on-surface-variant font-code-sm text-code-sm">
                2 hours ago • quantum-engine
              </p>
            </div>
          </div>
          {/* Story Item 2 */}
          <div className="flex gap-sm p-sm rounded bg-white/5 border border-transparent hover:border-tertiary/20 transition-all cursor-pointer group">
            <div className="w-16 h-16 rounded overflow-hidden shrink-0 border border-white/10">
              <Image
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                alt="An intricate 3D render of a luminous circuit board floating in a dark, ethereal void. Glowing neon green and emerald pathways pulse with energy against a backdrop of soft bokeh lights. The mood is sophisticated and high-tech, emphasizing a clean developer aesthetic with sharp geometric details and atmospheric depth."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuCv_IMZ_bfLcnlX6dkvtr9oDyNnCn3KD-ukoWO3f51Bo0JiP-Y_8gweeI8I6UaWcn_4Y-fSMMteYdv_IwAVnbqTF1we8tN-QDLm9_Nszjwond34_i6Iq6JBX21jKpB0WeSHzWIZ0uBaOycoJOdvTppLa0emFAygrFRLSaU8y29RkY5lYNTxUD39QfXWUNbrbQn30bTngLngcCf2tT4FC1ljOuhQFHpQJM4ydqkFCkDlxh3ZTnFLVURsrSbL6L8JiHu6PTf4Rz1QY"
                height={64}
                width={64}
              />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-on-surface font-semibold text-body-md group-hover:text-tertiary transition-colors">
                Nebula Overdrive
              </h4>
              <p className="text-on-surface-variant font-code-sm text-code-sm">
                Yesterday • nebula-ui-kit
              </p>
            </div>
          </div>
          {/* Story Item 3 */}
          <div className="flex gap-sm p-sm rounded bg-white/5 border border-transparent hover:border-tertiary/20 transition-all cursor-pointer group">
            <div className="w-16 h-16 rounded overflow-hidden shrink-0 border border-white/10">
              <Image
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                alt="A futuristic data visualization concept art piece featuring complex crystalline structures made of light. The color palette is dominated by deep violets and glowing magentas. Delicate light rays pierce through a hazy, digital atmosphere, suggesting a powerful artificial intelligence core. The style is abstract, high-fidelity, and cinematic."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1qvapa8kNcDp5qbvYw8nnO9QraeWzGi7WfFTsetiV4PH2aIBAnGTw9RSMTQsvZuDBChW28mSPymFmUWuYHT75vhFpY9nliTxoP2CLsyot_JNn4nR8rdQ31IqJkYS9FNxcbLxO6y9Jue3xOf5KmjtWJisi2WVb7Nga6Kr6XTiCrAPFl_84y1w6zKeiuq6g4BIPtoqWqsE2d01LrzFdam-XwmU7VGL9nhSHYB_Q73Yh6AgL8FNpGHnBBWx2QYjHm_YsUtOj1vTyrO4"
                height={64}
                width={64}
              />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-on-surface font-semibold text-body-md group-hover:text-tertiary transition-colors">
                The Flux Protocol
              </h4>
              <p className="text-on-surface-variant font-code-sm text-code-sm">
                3 days ago • flux-capacitor-v2
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white/5 p-sm border-t border-white/10 text-center">
          <button className="font-label-caps text-label-caps text-primary hover:underline">
            View All Archive
          </button>
        </div>
      </div>
      {/* Stats Card */}
      <div className="glass-card rounded-xl p-md border-l-4 border-l-tertiary">
        <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-sm">
          AI CAPACITY
        </h3>
        <div className="flex items-end gap-xs mb-xs">
          <span className="text-headline-lg font-bold text-on-surface">
            84%
          </span>
          <span className="text-tertiary font-code-sm text-code-sm pb-1">
            Available
          </span>
        </div>
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-tertiary w-[84%]"></div>
        </div>
        <p className="mt-md text-on-surface-variant font-code-sm text-code-sm">
          Next reset in 12:45:01
        </p>
      </div>
    </aside>
  );
};

export default RightSide;
