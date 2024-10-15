import Button from "./Button";

const Header = () => {
  return (
    <div className="min-w-[1136px] max-w-[1232px] flex items-center justify-between border-b border-lightGray pb-10 pt-5">
      <div className="flex flex-col gap-1">
        <p className="text-secondaryWhite text-2xl font-medium">Hello, John</p>
        <span className="text-[16px] leading-6 text-sideTextGray font-normal">
          Thursday, Febuary 15
        </span>
      </div>

      <div className="flex items-center gap-3 justify-center">
        <Button imgSrc="/search.png" imgAlt="" imgHeight={15} imgWidth={15} />
        <Button
          imgSrc="/alarm.png"
          imgAlt=""
          imgHeight={15}
          imgWidth={15}
          className="text-[14px] text-primaryWhite leading-5 bg-darkerGray"
        >
          Set alert
        </Button>
        <Button
          imgSrc="/notification.png"
          imgAlt=""
          imgHeight={15}
          imgWidth={15}
        />
      </div>
    </div>
  );
};

export default Header;
