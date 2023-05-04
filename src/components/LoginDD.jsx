import { colors } from "@/config/colors";
import { ClickAwayListener, Input, Button } from "@mui/base";
import { useSelector } from "react-redux";
const LoginDD = ({ clickAwayFn }) => {
  const { theme } = useSelector((a) => a.applicationStore);

  return (
    <ClickAwayListener onClickAway={clickAwayFn}>
      <div
        style={{
          background: colors[theme].bodyBg,
        }}
        className="h-[220px] w-[220px] shadow-lg shadow-lg-red overflow-hidden rounded-lg p-3 border border-[#eee]"
      >
        <h2
          style={{
            color: colors[theme].bodyBgText,
          }}
          className="font-bold leading-3"
        >
          Access your account
        </h2>
        <small
          style={{
            color: colors[theme].bodyBgText,
          }}
          className="text-[10px]"
        >
          Login and start purchasing.
        </small>

        <div className="w-full ">
          <input
            name="email"
            placeholder="Enter your email"
            autoComplete={clickAwayFn}
            className=" my-2 w-full outline-[#FCAE1F]  text-[12px] rounded-md p-1 py-2 border border-[#ddd]"
          />
          <input
            name="password"
            placeholder="Enter your password"
            type={"password"}
            autoComplete={clickAwayFn}
            className=" my-2 w-full outline-[#FCAE1F] text-[12px] rounded-md p-1 py-2 border border-[#ddd]"
          />

          <Button className="w-full py-2 text-[12px] bg-orange-400 rounded-md mt-2 hover:opacity-90">
            Login
          </Button>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default LoginDD;
