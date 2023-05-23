const styles = {
  boxWidth: "xl:max-w-[1560px] w-full",
  backgroundGradient:
    "transition-all ease-in-out bg-gradient-to-r from-[#68A778] to-[#B8483A] hover:from-[#B8483A] hover:to-[#B8483A] duration-300 rounded-2xl bg-size-600",
  backgroundGradient2:
    "transition-all ease-in-out bg-gradient-to-t from-[#67B88E] via-[#B8483A] to-[#5E56B6] duration-150 rounded-2xl bg-size-200 bg-pos-0 hover:bg-pos-100",
  searchButtonGradient:
    "transition-all ease-in-out bg-gradient-to-b from-violet-700 via-violet-700 to-[#5460F9] duration-150 bg-size-200 bg-pos-0 hover:bg-pos-100",
  searchButtonGradient2:
    "transition-all ease-in-out bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900 via-violet-700 to-[#5184E2] duration-150 bg-size-200 bg-pos-00 hover:bg-size-100 hover:bg-pos-100",
  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexStart2: "flex justify-center items-center",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  menuGradient: "bg-gradient-to-b from-indigo-300/30 to-primary/20",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
