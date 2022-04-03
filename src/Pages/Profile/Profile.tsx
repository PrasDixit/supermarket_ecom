import "../../Css/Profile.css";
import BreadCrumbs from "../../Component/Breadcrumbs/BreadCrumbs";
import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const baseURL = "https://uat.ordering-dalle.ekbana.net/";
  const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
  const access_token =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQxZmNmNWZhYzcyNDAzOTJhMzFlMDM2ZWJlNjBkZTU1N2Q4MTYwNzhjNTM0ZDlmZDMzOTZmMDIyODdhMzRhN2JiOGUxZDM2ZWE4ODhhMWFhIn0.eyJhdWQiOiIyIiwianRpIjoiZDFmY2Y1ZmFjNzI0MDM5MmEzMWUwMzZlYmU2MGRlNTU3ZDgxNjA3OGM1MzRkOWZkMzM5NmYwMjI4N2EzNGE3YmI4ZTFkMzZlYTg4OGExYWEiLCJpYXQiOjE2NDg3OTQxMTEsIm5iZiI6MTY0ODc5NDExMSwiZXhwIjoxNjQ5NjU4MTExLCJzdWIiOiI0NzQiLCJzY29wZXMiOltdfQ.Xg0yP3FVJrRfPMal8cu7mtU61b4P_uoV2PAV761s3BHI-yJQ8QbmuNwd9UOvPvIPXWCriFz6FmgUAkkTSFVJkiagB4pWbppUazvzU-tkP-TpG9KZofUHTaGCHqjxcgsueG-LzGkwcNWKhiMvSMxZqaZYrScgSknS0Z1O4D_SuCs8_ffRCWM1T0vrAoITTHcQjAiPYWC0YL3txl32UHlfmS7VmEXdFmlHCRJ-guyhp2NVcgasJm2fWqDebj8l2fnpNaer4Uup4lJp1OTcUioLN8ChDkySfD8DnO8S0LX_CrzsieGxW39l2A6GbcJFfcyvRs61a20Xg5XlAgrO48ES3Wjby_CmzxAqfiUq2cD4Mgi0sn98JzR5dTGJGpsnhkFNls8jJhsQFoQLTaqKUFXbSfbBDxs4jcJRhod-Sq0r7fDbGQ1PhFV7--u0JfMxYsowz3NbOm7bCnoYU6NcCINQIvw7MhDCa3m3C8_P5EH3JWCQMubssisMudlTGnUtHXYTvZ4aM_Od-om3rXf2xA6cZTZjCCx34AwjEAwTfgkAjXbXRTKjxTRx1ytPZRSuKr-ryIRZ3l347d8PFMheICi7u4twkkOBMx-rPdW4Wkp9i1xanGyKGNy7a8iSx3oEFFiHtUyX0LEoocYQ-j2xn33hC7IUFq1IY8sgckEHXi_R__o";

  const [profileInfo, setProfileInfo] = useState<any>();

  useEffect(() => {
    getProfileInfo();
  }, []);

  const getProfileInfo = async () => {
    try {
      const config = {
        headers: { "Api-Key": apiKey, Authorization: access_token },
      };

      const response = await axios.get(`${baseURL}api/v4/profile/show`, config);
      setProfileInfo(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <BreadCrumbs name="Profile" />
      <form className="profile-info">
        <label>First Name: </label>
        <span> {profileInfo.firstName}</span>
        <label>Last Name: </label> <span>{profileInfo.lastName}</span>
        <label>Email: </label> <span>{profileInfo.email}</span>
        <label>Profile Picture: </label>{" "}
        <span>
          <img
            className="profile-pic"
            src={profileInfo.image}
            alt="Profile_Img"
          />
        </span>
      </form>
    </>
  );
};

export default Profile;
