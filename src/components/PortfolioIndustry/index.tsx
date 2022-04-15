import { useState } from 'react';
import { AiOutlineWifi, AiOutlineSolution } from 'react-icons/ai';
import { BiMicrochip, BiSpeaker } from 'react-icons/bi';
import { BsCamera, BsLaptop, BsPhone, BsPrinter } from 'react-icons/bs';
import { CgCamera, CgSmartHomeWashMachine } from 'react-icons/cg';
import { FaGamepad } from 'react-icons/fa';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { RiComputerLine } from 'react-icons/ri';
import { SiPcgamingwiki } from 'react-icons/si';
import {
  StyledIndustryCategory,
  StyledProductPortfolio,
  StyledSubCatagory,
} from './PortfolioIndustry';

function PortfolioIndustry() {
  const [openSubCategory, setOpenSubCategory] = useState(true);

  const onMouseEnterHandler = () => {
    setOpenSubCategory(true);
  };

  const onMouseLeaveHandler = () => {
    setOpenSubCategory(false);
  };

  return (
    <StyledProductPortfolio>
      <ul className="intrustry-list" onMouseEnter={onMouseEnterHandler}>
        <li className="industry-item">
          <CgSmartHomeWashMachine className="industry-item__icon" />
          <div className="industry-item__name">Điện máy - điên da dụng</div>
          <StyledIndustryCategory className="industry-category">
            <StyledSubCatagory>
              <li className="sub-category-item title">Điều hòa máy lạnh</li>
              <li className="sub-category-item">Daikin</li>
              <li className="sub-category-item">Tủ lạnh inventor</li>
              <li className="sub-category-item">Misubishi</li>
              <li className="sub-category-item">LG</li>
              <div className="category-advertise">
                <img src={`/access/portfolio-industry/1.png`} alt="" />
              </div>
            </StyledSubCatagory>
          </StyledIndustryCategory>
        </li>
        <li className="industry-item">
          <BsLaptop className="industry-item__icon" />
          <div className="industry-item__name">Laptop & Markbook</div>
          <StyledIndustryCategory className="industry-category">
            <StyledSubCatagory>
              <li className="sub-category-item title">Laptop tivi</li>
              <li className="sub-category-item">Helo</li>
              <li className="sub-category-item">Tivi soni</li>
              <li className="sub-category-item">Panasonic</li>
              <li className="sub-category-item">LG</li>
              <div className="category-advertise">
                <img src={`/access/portfolio-industry/2.png`} alt="" />
              </div>
            </StyledSubCatagory>
          </StyledIndustryCategory>
        </li>
        <li className="industry-item">
          <RiComputerLine className="industry-item__icon" />
          <div className="industry-item__name">Tivi - Màn hình TV</div>
          <StyledIndustryCategory className="industry-category">
            <StyledSubCatagory>
              <li className="sub-category-item title">Laptop tivi</li>
              <li className="sub-category-item">LG</li>
              <li className="sub-category-item">Tivi soni</li>
              <li className="sub-category-item">DeLL</li>
            </StyledSubCatagory>
          </StyledIndustryCategory>
        </li>
        <li className="industry-item">
          <BsPhone className="industry-item__icon" />
          <div className="industry-item__name">Điện thoại & Thiết bị thông minh</div>
          <StyledIndustryCategory className="industry-category">
            <StyledSubCatagory>
              <li className="sub-category-item title">Iphone X</li>
              <li className="sub-category-item">SamSung</li>
              <li className="sub-category-item">XiaoMi</li>
              <li className="sub-category-item">Oppo</li>
            </StyledSubCatagory>
          </StyledIndustryCategory>
        </li>
        <li className="industry-item">
          <SiPcgamingwiki className="industry-item__icon" />
          <div className="industry-item__name">PC - Máy tính đồng bộ</div>
          <StyledIndustryCategory className="industry-category">
            <StyledSubCatagory>
              <li className="sub-category-item title">Dell</li>
              <li className="sub-category-item">Assus</li>
              <li className="sub-category-item">MacBook</li>
              <li className="sub-category-item">HP</li>
            </StyledSubCatagory>
          </StyledIndustryCategory>
        </li>
        <li className="industry-item">
          <HiOutlineDesktopComputer className="industry-item__icon" />
          <div className="industry-item__name">Màn hình máy tính</div>
          <StyledIndustryCategory className="industry-category">
            <StyledSubCatagory>
              <li className="sub-category-item title">Màn hình IPS.</li>
              <li className="sub-category-item">Màn hình OLED/AMOLED.</li>
              <li className="sub-category-item">Màn hình Retina.</li>
              <li className="sub-category-item">Màn hình TN (Twisted Nematic)</li>
              <li className="sub-category-item">Màn hình CCFL.</li>
            </StyledSubCatagory>
          </StyledIndustryCategory>
        </li>
        <li className="industry-item">
          <BiMicrochip className="industry-item__icon" />
          <div className="industry-item__name">Linh kiện máy tính</div>
          <StyledIndustryCategory className="industry-category">
            <StyledSubCatagory>
              <li className="sub-category-item title">CPU - Bộ vi xử lý</li>
              <li className="sub-category-item">VGA - Card Màn Hình.</li>
              <li className="sub-category-item">PSU - Nguồn máy tính.</li>
              <li className="sub-category-item">Ổ cứng HDD - SSD.</li>
              <li className="sub-category-item">Ram - Bộ nhớ trong.</li>
              <li className="sub-category-item">Mainboard.</li>
            </StyledSubCatagory>
          </StyledIndustryCategory>
        </li>
        <li className="industry-item">
          <FaGamepad className="industry-item__icon" />
          <div className="industry-item__name">End Gaming</div>
          <StyledIndustryCategory className="industry-category">
            <StyledSubCatagory>
              <li className="sub-category-item title">Dishonored.</li>
              <li className="sub-category-item">BioShock 2</li>
              <li className="sub-category-item">Far Cry 3.</li>
              <li className="sub-category-item">Sid Meier's Civilization.</li>
              <li className="sub-category-item">Command & Conquer: Tiberian Sun.</li>
              <li className="sub-category-item">Undertale.</li>
            </StyledSubCatagory>
          </StyledIndustryCategory>
        </li>
        <li className="industry-item">
          <CgCamera className="industry-item__icon" />
          <div className="industry-item__name">Phụ kiện & Thiết bị ngoại vi</div>
          <StyledIndustryCategory className="industry-category">
            <StyledSubCatagory>
              <li className="sub-category-item title">Màn hình máy tính. ...</li>
              <li className="sub-category-item">Ổ đĩa mềm.</li>
              <li className="sub-category-item">Ổ đĩa quang.</li>
              <li className="sub-category-item">Máy in – printer.</li>
              <li className="sub-category-item">Ram - Bộ nhớ trong.</li>
              <li className="sub-category-item">Scanner.</li>
            </StyledSubCatagory>
          </StyledIndustryCategory>
        </li>
        <li className="industry-item">
          <BiSpeaker className="industry-item__icon" />
          <div className="industry-item__name">Thiết bị âm thanh</div>
          <StyledIndustryCategory className="industry-category">
            <StyledSubCatagory>
              <li className="sub-category-item title">Loa.</li>
              <li className="sub-category-item">Micro karaoke.</li>
              <li className="sub-category-item">Mixer soni</li>
              <li className="sub-category-item">Bộ xử lý tín hiệu.</li>
            </StyledSubCatagory>
          </StyledIndustryCategory>
        </li>
        <li className="industry-item">
          <BsCamera className="industry-item__icon" />
          <div className="industry-item__name">Máy ảnh - Máy quay phim</div>
          <StyledIndustryCategory className="industry-category">
            <StyledSubCatagory>
              <li className="sub-category-item title">DJI Pocket 2.</li>
              <li className="sub-category-item">Sony ZV-1.</li>
              <li className="sub-category-item">MPanasonic Lumix DC-GH5.</li>
              <li className="sub-category-item">Fujifilm .</li>
            </StyledSubCatagory>
          </StyledIndustryCategory>
        </li>
        <li className="industry-item">
          <BsPrinter className="industry-item__icon" />
          <div className="industry-item__name">Thiết bị văn phòng</div>
          <StyledIndustryCategory className="industry-category">
            <StyledSubCatagory>
              <li className="sub-category-item title">Bàn.</li>
              <li className="sub-category-item">Ghế.</li>
              <li className="sub-category-item"> Lumix DC-GH5.</li>
              <li className="sub-category-item">Các loại máy văn phòng. .</li>
            </StyledSubCatagory>
          </StyledIndustryCategory>
        </li>
        <li className="industry-item">
          <AiOutlineWifi className="industry-item__icon" />
          <div className="industry-item__name">Thiết bị mạng - An ninh</div>
          <StyledIndustryCategory className="industry-category">
            <StyledSubCatagory>
              <li className="sub-category-item title">Hệ thống camera giám sát.</li>
              <li className="sub-category-item">Cảm biến vỡ kính.</li>
              <li className="sub-category-item"> Hệ thống báo cháy tự động.</li>
              <li className="sub-category-item">Khóa cửa thông minh.</li>
            </StyledSubCatagory>
          </StyledIndustryCategory>
        </li>
        <li className="industry-item">
          <AiOutlineSolution className="industry-item__icon" />
          <div className="industry-item__name">Giải pháp doanh nghiệp</div>
          <StyledIndustryCategory className="industry-category">
            <StyledSubCatagory>
              <li className="sub-category-item title">Hệ thống camera giám sát.</li>
              <li className="sub-category-item">Cảm biến vỡ kính.</li>
              <li className="sub-category-item"> Hệ thống báo cháy tự động.</li>
              <li className="sub-category-item">Khóa cửa thông minh.</li>
            </StyledSubCatagory>
          </StyledIndustryCategory>
        </li>
      </ul>
    </StyledProductPortfolio>
  );
}

export default PortfolioIndustry;
