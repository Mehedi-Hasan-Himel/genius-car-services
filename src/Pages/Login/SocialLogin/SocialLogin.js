import React from "react";
import google from '../../../img/Social/google-logo.webp'
import facebook from '../../../img/Social/facebook-logo.webp'
import github from '../../../img/Social/github-logo.webp'

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50 "></div>
        <p className="mt-3 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50 "></div>
      </div>
      <div className="">
        <button className="btn btn-info w-50 d-block mx-auto my-3">
          <img style={{ width: "40px" }} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
        <button className="btn btn-info w-50 d-block mx-auto my-3">
          <img style={{ width: "40px" }} src={facebook} alt="" />
          <span className="px-2">Facebook Sign In</span>
        </button>
        <button className="btn btn-info w-50 d-block mx-auto my-3">
          <img style={{ width: "40px" }} src={github} alt="" />
          <span className="px-2">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
