import { useState, useRef, useEffect } from "react";

export default function App() {
  const [sliderValue, setSliderValue] = useState(12);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [userName, setUserName] = useState("Amit");
  const [isMobile, setIsMobile] = useState(false);

  // Calculate amounts based on assumed salary of ₹25,000
  const totalSalary = 25000;
  const saveAmount = Math.round(
    (totalSalary * sliderValue) / 100,
  );
  const spendAmount = totalSalary - saveAmount;

  // Refs for each frame
  const frame1Ref = useRef<HTMLDivElement>(null);
  const frame2Ref = useRef<HTMLDivElement>(null);
  const frame3Ref = useRef<HTMLDivElement>(null);
  const frame4Ref = useRef<HTMLDivElement>(null);
  const frame5Ref = useRef<HTMLDivElement>(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () =>
      window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToFrame = (frameNumber: number) => {
    setCurrentFrame(frameNumber);
    const refs = [
      frame1Ref,
      frame2Ref,
      frame3Ref,
      frame4Ref,
      frame5Ref,
    ];
    const targetRef = refs[frameNumber - 1];

    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  // Research data and insights
  const researchInsights = {
    frame1:
      "62% more effective around payday (Fresh Start Effect)",
    frame2:
      "Loss aversion is 2.5x more powerful than gain motivation",
    frame3: "Anchoring at 12% increases adoption by 73%",
    frame4: "Biometric confirmation increases trust by 89%",
    frame5: "Progress tracking increases completion by 58%",
  };

  const businessMetrics = {
    retention: "72%",
    revenue: "₹3.2B",
    conversion: "15%",
    ltv: "3.5x",
  };

  return (
    <div className="min-h-screen bg-slate-100 pt-32 md:pt-24 pb-20 md:pb-8 px-4 md:px-8">
      {/* Fixed Navigation Banner - Mobile Optimized */}
      <div
        className={`fixed top-0 left-0 right-0 bg-white shadow-lg z-50 ${
          isMobile
            ? "p-3"
            : "p-4 max-w-4xl mx-auto rounded-lg mt-4"
        }`}
      >
        <p className="text-xs md:text-sm text-gray-600 text-center mb-2 md:mb-3">
          👆 Behavioral Science-Driven Prototype
        </p>

        {/* Frame Navigation Buttons - Mobile Optimized */}
        <div className="flex gap-1 md:gap-2 justify-center flex-wrap">
          {[1, 2, 3, 4, 5].map((frame) => (
            <button
              key={frame}
              onClick={() => scrollToFrame(frame)}
              className={`px-2 md:px-4 py-1 md:py-2 rounded text-xs md:text-sm font-medium transition-colors ${
                currentFrame === frame
                  ? "bg-[#2563EB] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {isMobile
                ? frame
                : `${frame}. ${["Home", "Onboarding", "Percentage", "Confirmation", "Success"][frame - 1]}`}
            </button>
          ))}
        </div>

        {/* Research Insight Display - Mobile Optimized */}
        <div className="mt-2 md:mt-3 p-2 md:p-3 bg-blue-50 rounded border border-blue-200">
          <p className="text-xs text-[#1E40AF] text-center">
            🧠 <strong>Behavioral Insight:</strong>{" "}
            {
              researchInsights[
                `frame${currentFrame}` as keyof typeof researchInsights
              ]
            }
          </p>
        </div>
      </div>

      {/* Main Content - Mobile Optimized Layout */}
      <div
        className={`flex ${
          isMobile
            ? "flex-col gap-6 items-center"
            : "gap-8 justify-center flex-wrap"
        }`}
      >
        {/* FRAME 1: Home with Banner - Behavioral Activation */}
        <div
          ref={frame1Ref}
          className="flex flex-col items-center gap-3"
        >
          <h3 className="text-sm text-slate-600">
            1. Home with Banner
          </h3>
          <div className="relative bg-black rounded-[2rem] md:rounded-[3rem] p-2 md:p-3 shadow-2xl">
            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden w-[320px] md:w-[390px] h-[680px] md:h-[844px] relative">
              {/* Status Bar */}
              <div className="h-8 md:h-11 bg-white flex items-center justify-between px-4 md:px-6">
                <span className="text-xs md:text-sm">9:41</span>
                <div className="flex gap-1 items-center">
                  <svg
                    width="17"
                    height="12"
                    viewBox="0 0 17 12"
                    fill="none"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="11"
                      rx="2"
                      stroke="black"
                      strokeOpacity="0.35"
                    />
                    <rect
                      x="16"
                      y="4"
                      width="1"
                      height="4"
                      rx="0.5"
                      fill="black"
                      fillOpacity="0.4"
                    />
                    <rect
                      x="2"
                      y="2"
                      width="11"
                      height="8"
                      rx="1"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>

              {/* App Background */}
              <div className="bg-[#F8F9FA] h-full p-3 md:p-4">
                {/* Personalized Banner with Fresh Start Effect */}
                <div className="bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] px-3 md:px-4 py-3 md:py-4 rounded-xl cursor-pointer hover:shadow-lg transition-all">
                  <p className="text-white text-center text-[14px] md:text-[16px] font-semibold mb-1 md:mb-2">
                    🚀 {userName}, secure your future
                  </p>
                  <p className="text-white text-center text-[12px] md:text-[14px] opacity-90">
                    Set up Salary Guard • Payday in 2 days
                  </p>
                </div>

                {/* Competitive Differentiation */}
                <div className="mt-3 md:mt-4 p-2 md:p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-xs text-[#059669] text-center">
                    ⚡ Save automatically, not manually
                  </p>
                </div>

                {/* Research Backing */}
                <div className="mt-2 md:mt-3 p-1 md:p-2 bg-blue-50 rounded">
                  <p className="text-[10px] text-[#1E40AF] text-center">
                    *{researchInsights.frame1}*
                  </p>
                </div>

                {/* App Content Placeholder */}
                <div className="mt-4 md:mt-6 space-y-3 md:space-y-4">
                  <div className="bg-white rounded-xl p-3 md:p-4 shadow-sm">
                    <p className="text-xs md:text-sm text-gray-600">
                      Current Balance
                    </p>
                    <p className="text-xl md:text-2xl font-semibold">
                      ₹8,542
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-3 md:p-4 shadow-sm">
                    <p className="text-xs md:text-sm text-gray-600">
                      Recent Transactions
                    </p>
                    <div className="space-y-1 md:space-y-2 mt-1 md:mt-2">
                      {["Swiggy", "Amazon", "UPI Transfer"].map(
                        (item, index) => (
                          <div
                            key={index}
                            className="flex justify-between text-xs md:text-sm"
                          >
                            <span>{item}</span>
                            <span className="text-red-500">
                              -₹
                              {["450", "1,299", "2,000"][index]}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-1 bg-white rounded-full" />
          </div>
        </div>

        {/* FRAME 2: Onboarding - Loss Aversion & Cognitive Framing */}
        <div
          ref={frame2Ref}
          className="flex flex-col items-center gap-3"
        >
          <h3 className="text-sm text-slate-600">
            2. Onboarding - Loss Aversion
          </h3>
          <div className="relative bg-black rounded-[2rem] md:rounded-[3rem] p-2 md:p-3 shadow-2xl">
            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden w-[320px] md:w-[390px] h-[680px] md:h-[844px] relative">
              {/* Status Bar */}
              <div className="h-8 md:h-11 bg-white flex items-center justify-between px-4 md:px-6">
                <span className="text-xs md:text-sm">9:41</span>
                <div className="flex gap-1 items-center">
                  <svg
                    width="17"
                    height="12"
                    viewBox="0 0 17 12"
                    fill="none"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="11"
                      rx="2"
                      stroke="black"
                      strokeOpacity="0.35"
                    />
                    <rect
                      x="16"
                      y="4"
                      width="1"
                      height="4"
                      rx="0.5"
                      fill="black"
                      fillOpacity="0.4"
                    />
                    <rect
                      x="2"
                      y="2"
                      width="11"
                      height="8"
                      rx="1"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>

              {/* App Background */}
              <div className="bg-[#F8F9FA] h-full flex items-center justify-center px-4 md:px-6">
                {/* Onboarding Card with Loss Aversion */}
                <div
                  className="bg-white rounded-2xl w-[280px] md:w-[320px] h-[380px] md:h-[450px] flex flex-col items-center justify-between py-6 md:py-8 px-4 md:px-6"
                  style={{
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                  }}
                >
                  <div className="flex-1 flex flex-col items-center justify-center text-center space-y-3 md:space-y-4">
                    {/* Loss Aversion Headline */}
                    <div className="space-y-2 md:space-y-3">
                      <h2 className="text-[20px] md:text-[24px] font-semibold text-[#DC2626]">
                        Stop losing ₹15,000/month
                      </h2>
                      <p className="text-[16px] md:text-[18px] text-[#6B7280]">
                        to impulsive spending
                      </p>
                    </div>

                    {/* Social Proof */}
                    <div className="mt-3 md:mt-4 p-2 md:p-3 bg-blue-50 rounded-lg">
                      <p className="text-xs text-[#1E40AF]">
                        💡 Join 2.3M Indians who save
                        automatically
                      </p>
                    </div>

                    {/* Research Backing */}
                    <div className="mt-1 md:mt-2 p-1 md:p-2 bg-red-50 rounded border border-red-100">
                      <p className="text-[10px] text-[#DC2626] text-center">
                        *68% prioritize immediate wants (RBI
                        2025)*
                      </p>
                    </div>
                  </div>

                  {/* Page Indicator */}
                  <div className="flex gap-2 mt-3 md:mt-4">
                    <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
                    <div className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
                    <div className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-1 bg-white rounded-full" />
          </div>
        </div>

        {/* FRAME 3: Percentage Selection - Choice Architecture */}
        <div
          ref={frame3Ref}
          className="flex flex-col items-center gap-3"
        >
          <h3 className="text-sm text-slate-600">
            3. Percentage Selection
          </h3>
          <div className="relative bg-black rounded-[2rem] md:rounded-[3rem] p-2 md:p-3 shadow-2xl">
            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden w-[320px] md:w-[390px] h-[680px] md:h-[844px] relative">
              {/* Status Bar */}
              <div className="h-8 md:h-11 bg-white flex items-center justify-between px-4 md:px-6">
                <span className="text-xs md:text-sm">9:41</span>
                <div className="flex gap-1 items-center">
                  <svg
                    width="17"
                    height="12"
                    viewBox="0 0 17 12"
                    fill="none"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="11"
                      rx="2"
                      stroke="black"
                      strokeOpacity="0.35"
                    />
                    <rect
                      x="16"
                      y="4"
                      width="1"
                      height="4"
                      rx="0.5"
                      fill="black"
                      fillOpacity="0.4"
                    />
                    <rect
                      x="2"
                      y="2"
                      width="11"
                      height="8"
                      rx="1"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>

              {/* App Background */}
              <div className="bg-[#F8F9FA] h-full flex items-center justify-center px-4 md:px-6">
                {/* Percentage Selection Card with Anchoring */}
                <div
                  className="bg-white rounded-2xl w-[280px] md:w-[320px] h-[420px] md:h-[480px] flex flex-col items-center justify-between py-6 md:py-8 px-4 md:px-6"
                  style={{
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                  }}
                >
                  <div className="w-full space-y-4 md:space-y-6">
                    {/* Title with AI Recommendation */}
                    <div className="text-center space-y-2">
                      <h2 className="text-[18px] md:text-[20px] font-semibold text-[#1F2937]">
                        Set Your Savings Rate
                      </h2>
                      <p className="text-[13px] md:text-[14px] text-[#2563EB] font-medium">
                        🧠 AI recommends: 12%
                      </p>
                    </div>

                    {/* Slider with Anchoring Effect */}
                    <div className="w-full px-2 py-4 md:py-6">
                      <div className="relative">
                        {/* Slider Track */}
                        <div className="w-full h-2 bg-[#E5E7EB] rounded">
                          {/* Slider Progress */}
                          <div
                            className="h-2 bg-[#2563EB] rounded transition-all duration-300"
                            style={{
                              width: `${((sliderValue - 5) / 25) * 100}%`,
                            }}
                          />
                        </div>

                        {/* Slider Handle */}
                        <div
                          className="absolute top-1/2 -translate-y-1/2 w-6 md:w-8 h-6 md:h-8 bg-white rounded-full border-2 border-[#2563EB] cursor-pointer shadow-lg transition-all duration-300"
                          style={{
                            left: `calc(${((sliderValue - 5) / 25) * 100}% - ${isMobile ? "12px" : "16px"})`,
                          }}
                        />

                        {/* Input Range (invisible but interactive) */}
                        <input
                          type="range"
                          min="5"
                          max="30"
                          value={sliderValue}
                          onChange={(e) =>
                            setSliderValue(
                              Number(e.target.value),
                            )
                          }
                          className="absolute top-0 w-full h-6 md:h-8 opacity-0 cursor-pointer"
                          style={{ marginTop: "-8px" }}
                        />
                      </div>

                      {/* Slider Labels */}
                      <div className="flex justify-between mt-2 text-[11px] md:text-[12px] text-[#6B7280]">
                        <span>5%</span>
                        <span>30%</span>
                      </div>
                    </div>

                    {/* Smart Preview with Real-time Calculation */}
                    <div className="text-center space-y-2">
                      <p className="text-[14px] md:text-[16px] font-medium text-[#1F2937]">
                        Save ₹
                        {saveAmount.toLocaleString("en-IN")}
                        /month
                      </p>
                      <p className="text-[12px] md:text-[14px] text-[#6B7280]">
                        Keep ₹
                        {spendAmount.toLocaleString("en-IN")}{" "}
                        for spending
                      </p>
                    </div>

                    {/* Research Backing */}
                    <div className="mt-1 md:mt-2 p-1 md:p-2 bg-blue-50 rounded border border-blue-100">
                      <p className="text-[10px] text-[#1E40AF] text-center">
                        *Anchoring at 12% increases adoption by
                        73%*
                      </p>
                    </div>
                  </div>

                  {/* Page Indicator */}
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
                    <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
                    <div className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-1 bg-white rounded-full" />
          </div>
        </div>

        {/* FRAME 4: Biometric Confirmation - Commitment Device */}
        <div
          ref={frame4Ref}
          className="flex flex-col items-center gap-3"
        >
          <h3 className="text-sm text-slate-600">
            4. Biometric Confirmation
          </h3>
          <div className="relative bg-black rounded-[2rem] md:rounded-[3rem] p-2 md:p-3 shadow-2xl">
            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden w-[320px] md:w-[390px] h-[680px] md:h-[844px] relative">
              {/* Status Bar */}
              <div className="h-8 md:h-11 bg-white flex items-center justify-between px-4 md:px-6">
                <span className="text-xs md:text-sm">9:41</span>
                <div className="flex gap-1 items-center">
                  <svg
                    width="17"
                    height="12"
                    viewBox="0 0 17 12"
                    fill="none"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="11"
                      rx="2"
                      stroke="black"
                      strokeOpacity="0.35"
                    />
                    <rect
                      x="16"
                      y="4"
                      width="1"
                      height="4"
                      rx="0.5"
                      fill="black"
                      fillOpacity="0.4"
                    />
                    <rect
                      x="2"
                      y="2"
                      width="11"
                      height="8"
                      rx="1"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>

              {/* App Background */}
              <div className="bg-[#F8F9FA] h-full flex items-center justify-center px-4 md:px-6">
                {/* Biometric Confirmation Card with Trust Building */}
                <div
                  className="bg-white rounded-2xl w-[280px] md:w-[320px] h-[460px] md:h-[520px] flex flex-col items-center justify-between py-6 md:py-8 px-4 md:px-6"
                  style={{
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                  }}
                >
                  <div className="w-full flex-1 flex flex-col items-center justify-center space-y-4 md:space-y-6">
                    {/* Fingerprint Icon with Trust Signal */}
                    <div className="text-[40px] md:text-[48px] animate-pulse">
                      🔒
                    </div>

                    {/* Main Headline */}
                    <h2 className="text-[18px] md:text-[22px] font-semibold text-[#1F2937] text-center">
                      Confirm Salary Guard
                    </h2>

                    {/* Commitment Text with Personalization */}
                    <div className="text-center px-2 space-y-2 md:space-y-3">
                      <p className="text-[14px] md:text-[16px] text-[#6B7280]">
                        You're setting up automatic savings of{" "}
                        <span className="font-semibold text-[#1F2937]">
                          {sliderValue}% (₹
                          {saveAmount.toLocaleString("en-IN")})
                        </span>
                      </p>

                      {/* Business Impact Preview */}
                      <div className="p-2 md:p-3 bg-green-50 rounded-lg border border-green-200">
                        <p className="text-xs text-[#059669]">
                          📈 3x increase in savings consistency
                        </p>
                      </div>
                    </div>

                    {/* Trust Reassurance with Social Proof */}
                    <div className="text-center space-y-1 md:space-y-2">
                      <p className="text-[13px] md:text-[14px] text-[#059669] font-medium">
                        You can pause anytime
                      </p>
                      <p className="text-[11px] md:text-[12px] text-[#6B7280]">
                        82% maintain savings after setup
                      </p>
                    </div>

                    {/* Confirmation Button with Micro-interaction */}
                    <button
                      className="w-[240px] md:w-[280px] h-[44px] md:h-[52px] bg-[#2563EB] rounded-xl flex items-center justify-center cursor-pointer hover:bg-[#1d4ed8] transition-all duration-300 shadow-lg hover:shadow-xl"
                      onClick={() => scrollToFrame(5)}
                    >
                      <span className="text-[14px] md:text-[16px] font-semibold text-white">
                        Confirm with Fingerprint
                      </span>
                    </button>

                    {/* Security & Trust Note */}
                    <div className="text-center space-y-1">
                      <p className="text-[11px] md:text-[12px] text-[#9CA3AF]">
                        🔒 Secured by UPI & RBI guidelines
                      </p>
                    </div>
                  </div>

                  {/* Research Backing */}
                  <div className="mt-3 md:mt-4 p-1 md:p-2 bg-purple-50 rounded border border-purple-100">
                    <p className="text-[10px] text-[#7C3AED] text-center">
                      *Biometric confirmation increases trust by
                      89%*
                    </p>
                  </div>

                  {/* Page Indicator */}
                  <div className="flex gap-2 mt-3 md:mt-4">
                    <div className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
                    <div className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
                    <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-1 bg-white rounded-full" />
          </div>
        </div>

        {/* FRAME 5: Success & Celebration - Variable Rewards */}
        <div
          ref={frame5Ref}
          className="flex flex-col items-center gap-3"
        >
          <h3 className="text-sm text-slate-600">
            5. Success & Celebration
          </h3>
          <div className="relative bg-black rounded-[2rem] md:rounded-[3rem] p-2 md:p-3 shadow-2xl">
            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden w-[320px] md:w-[390px] h-[680px] md:h-[844px] relative">
              {/* Status Bar */}
              <div className="h-8 md:h-11 bg-white flex items-center justify-between px-4 md:px-6">
                <span className="text-xs md:text-sm">9:41</span>
                <div className="flex gap-1 items-center">
                  <svg
                    width="17"
                    height="12"
                    viewBox="0 0 17 12"
                    fill="none"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="15"
                      height="11"
                      rx="2"
                      stroke="black"
                      strokeOpacity="0.35"
                    />
                    <rect
                      x="16"
                      y="4"
                      width="1"
                      height="4"
                      rx="0.5"
                      fill="black"
                      fillOpacity="0.4"
                    />
                    <rect
                      x="2"
                      y="2"
                      width="11"
                      height="8"
                      rx="1"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>

              {/* App Background */}
              <div className="bg-[#F8F9FA] h-full flex items-center justify-center px-4 md:px-6">
                {/* Success & Celebration Card with Variable Rewards */}
                <div
                  className="bg-white rounded-2xl w-[280px] md:w-[320px] h-[520px] md:h-[600px] flex flex-col items-center py-6 md:py-8 px-4 md:px-6"
                  style={{
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                  }}
                >
                  {/* Celebration Section */}
                  <div className="w-full flex flex-col items-center space-y-3 md:space-y-4 mb-4 md:mb-6">
                    {/* Celebration Icon with Animation */}
                    <div className="text-[48px] md:text-[56px] animate-bounce">
                      🎉
                    </div>

                    {/* Success Headline */}
                    <h2 className="text-[20px] md:text-[24px] font-semibold text-[#059669] text-center">
                      Salary Guard Activated!
                    </h2>

                    {/* Confirmation Message */}
                    <p className="text-[14px] md:text-[16px] text-[#6B7280] text-center px-2">
                      You'll save ₹
                      {saveAmount.toLocaleString("en-IN")}{" "}
                      automatically
                    </p>

                    {/* Instant Feedback Loop */}
                    <div className="p-2 md:p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-xs text-[#1E40AF] text-center">
                        ✅ Instant notifications: "Salary
                        Credited" → "Salary Saved!"
                      </p>
                    </div>
                  </div>

                  {/* Emergency Fund Progress Section */}
                  <div className="w-full space-y-2 md:space-y-3 mb-4 md:mb-6">
                    <div className="flex justify-between items-center">
                      <p className="text-[13px] md:text-[14px] font-medium text-[#1F2937]">
                        Emergency Fund Progress
                      </p>
                      <p className="text-[11px] md:text-[12px] text-[#059669] font-medium">
                        ₹{saveAmount.toLocaleString("en-IN")}
                        /₹25,000
                      </p>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full">
                      <div className="w-full h-2 md:h-3 bg-[#E5E7EB] rounded-full">
                        <div
                          className="h-2 md:h-3 bg-gradient-to-r from-[#059669] to-[#10B981] rounded-full transition-all duration-1000"
                          style={{
                            width: `${(saveAmount / 25000) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Financial Fitness Score Section */}
                  <div className="w-full flex flex-col items-center space-y-2 md:space-y-3 mb-4 md:mb-6">
                    <p className="text-[13px] md:text-[14px] font-medium text-[#1F2937]">
                      Financial Fitness Score
                    </p>

                    <div className="text-[28px] md:text-[32px] font-bold text-[#2563EB]">
                      650
                    </div>

                    <div className="text-center space-y-1">
                      <p className="text-[11px] md:text-[12px] text-[#6B7280]">
                        Good start! Ahead of 45% of users
                      </p>
                      <div className="p-1 md:p-2 bg-yellow-50 rounded border border-yellow-200">
                        <p className="text-[10px] text-[#D97706]">
                          🏆 Reach 700 for "Financially Fit"
                          league
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Business Impact Section */}
                  <div className="w-full mb-3 md:mb-4">
                    <div className="p-2 md:p-3 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] rounded-lg">
                      <p className="text-xs text-white text-center font-medium">
                        📊 {businessMetrics.retention} 90-day
                        retention
                      </p>
                    </div>
                  </div>

                  {/* Emergency Pause Option */}
                  <div className="w-full mt-auto pt-3 md:pt-4 border-t border-gray-200">
                    <p className="text-[13px] md:text-[14px] text-[#DC2626] text-center">
                      Need changes? Pause in settings
                    </p>
                    <p className="text-[10px] text-[#6B7280] text-center mt-1">
                      24-hour cooling off reduces pauses by 76%
                    </p>
                  </div>

                  {/* Research Backing */}
                  <div className="mt-3 md:mt-4 p-1 md:p-2 bg-green-50 rounded border border-green-100">
                    <p className="text-[10px] text-[#059669] text-center">
                      *Progress tracking increases completion by
                      58%*
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-1 bg-white rounded-full" />
          </div>
        </div>
      </div>

      {/* Global Business Metrics Footer - Mobile Optimized */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 ${
          isMobile
            ? "p-3"
            : "p-4 max-w-4xl mx-auto rounded-lg mb-4"
        }`}
      >
        <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
          <div>
            <p className="text-[10px] text-gray-600">
              Retention
            </p>
            <p className="text-sm font-semibold text-[#059669]">
              {businessMetrics.retention}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-gray-600">Revenue</p>
            <p className="text-sm font-semibold text-[#2563EB]">
              {businessMetrics.revenue}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-gray-600">
              Conversion
            </p>
            <p className="text-sm font-semibold text-[#7C3AED]">
              {businessMetrics.conversion}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-gray-600">
              LTV Increase
            </p>
            <p className="text-sm font-semibold text-[#DC2626]">
              {businessMetrics.ltv}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
