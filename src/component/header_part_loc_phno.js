import React from "react";
import "./header_part_loc_phno.css";

const Header_part_loc_phno = () => {
  return (
    <>
      <div className="Header_part_loc_phno_outer_div">
        <div className="Loc_phno_part">
          <table>
            <tr>
              <td>
                <div className="Style_text">PLOT No.- 1234/3102 RAMESWAR LANE, NAYAGARH</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="Style_text"><ion-icon name="call"></ion-icon> 9777907561</div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};
export default Header_part_loc_phno;
