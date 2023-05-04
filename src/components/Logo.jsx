import { useRouter } from "next/router";

const Logo = ({ size = "small" }) => {
  const router = useRouter();
  const classes =
    size === "small"
      ? `rounded-lg cursor-pointer h-[30px] w-[30px]`
      : `rounded-lg cursor-pointer h-[80px] w-[80px]`;
  return (
    <img
      className={classes}
      src="/assets/images/logo1.jpeg"
      alt="logo"
      onClick={() => router.push("/")}
    />
  );
};

export default Logo;
