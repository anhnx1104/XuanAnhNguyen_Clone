import { StyledBottomFooter, StyledFooter, StyledFooterColumn, StyledFooterWrap } from './Footer';
import { BiHeadphone } from 'react-icons/bi';
import { ImQrcode } from 'react-icons/im';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { SiInternetarchive } from 'react-icons/si';
import Link from 'next/link';

function Footer() {
  return (
    <StyledFooterWrap>
      <StyledFooter>
        <div className="wrap w-5">
          <StyledFooterColumn>
            <div className="title">Hỗ trợ khách hàng</div>
            <ul className="list">
              <li className="row">Thẻ ưu đãi</li>
              <li className="row">Trung tâm bảo hành</li>
              <li className="row">Thanh toán và giao hàng</li>
              <li className="row">Doanh nghiệp thân thiết</li>
            </ul>
          </StyledFooterColumn>
          <StyledFooterColumn>
            <div className="title">Hỗ trợ khách hàng</div>
            <ul className="list">
              <li className="row">Thẻ ưu đãi</li>
              <li className="row">Trung tâm bảo hành</li>
              <li className="row">Thanh toán và giao hàng</li>
              <li className="row">Doanh nghiệp thân thiết</li>
              <li className="row">Thẻ ưu đãi</li>
              <li className="row">Trung tâm bảo hành</li>
              <li className="row">Thanh toán và giao hàng</li>
              <li className="row">Doanh nghiệp thân thiết</li>
            </ul>
          </StyledFooterColumn>
          <StyledFooterColumn>
            <div className="title">Hỗ trợ khách hàng</div>
            <ul className="list">
              <li className="row">Thẻ ưu đãi</li>
              <li className="row">Trung tâm bảo hành</li>
              <li className="row">Thanh toán và giao hàng</li>
              <li className="row">Doanh nghiệp thân thiết</li>
            </ul>
          </StyledFooterColumn>
          <StyledFooterColumn>
            <div className="title"> Cao đẳng bách khoa Hn</div>
            <ul className="list">
              <li className="row">Thẻ ưu đãi</li>
              <li className="row">Trung tâm bảo hành</li>
              <li className="row">
                <div className="icon">
                  <BiHeadphone />
                </div>
                Gọi mua hàng:
                <span className="hotline">1800 6867</span>
                (miễn phí)
              </li>
              <li className="row">
                <div className="icon">
                  <BiHeadphone />
                </div>
                Gọi chăm sóc:
                <span className="hotline">1800 6867</span>
                (miễn phí)
              </li>
              <li className="row">Doanh nghiệp thân thiết</li>
            </ul>
          </StyledFooterColumn>
          <StyledFooterColumn>
            <div className="title">Email liên hệ</div>
            <ul className="list">
              <li className="row">
                <div className="link-wrap">
                  Hỗ trợ Khách hàng:
                  <Link href="mailto:NguyenXuanAnhK19-it03">
                    <a className="link">NguyenXuanAnhK19-it03</a>
                  </Link>
                </div>
              </li>
              <li className="row">
                <div className="link-wrap">
                  Liên hệ báo giá:
                  <Link href="mailto:NguyenXuanAnhK19-it03">
                    <a className="link">NguyenXuanAnh@gmail.com</a>
                  </Link>
                </div>
              </li>
              <li className="row">Trung tâm bảo hành</li>
              <li className="row">Thanh toán và giao hàng</li>
              <li className="row">Doanh nghiệp thân thiết</li>
            </ul>
          </StyledFooterColumn>
        </div>
        <div className="wrap w-5">
          <StyledFooterColumn className="w-1-3">
            <div className="title">Phương thức thanh toán</div>
            <ul className="list list--row-direction">
              <li className="row column-direction column-center">
                <div className="purchase-icon">
                  <ImQrcode />
                </div>
                QR Code
              </li>
              <li className="row column-direction column-center">
                <div className="purchase-icon">
                  <FaMoneyBillAlt />
                </div>
                Tiềm mặt
              </li>
              <li className="row column-direction column-center">
                <div className="purchase-icon">
                  <SiInternetarchive />
                </div>
                Internet Banking
              </li>
            </ul>
          </StyledFooterColumn>
          <StyledFooterColumn className="w-3-6">
            <div className="title">Danh sách các ngân hàng thanh toán online</div>
            <img src="/access/banking/1.jpg" alt="#" className="banking" />
          </StyledFooterColumn>
        </div>
      </StyledFooter>
      <StyledBottomFooter>
        <div className="wrap w-5">
          <StyledFooterColumn className="w-1-3">
            <div className="title">TRƯỜNG CAO ĐẲNG CÔNG NGHỆ BÁCH KHOA HÀ NỘI</div>
            <ul className="list">
              <li className="row">© 1997 - 2020 Công Ty Cổ Phần Thương Mại - Dịch Vụ Phong Vũ</li>
              <li className="row">
                Giấy chứng nhận đăng ký doanh nghiệp: 0304998358 do Sở KH-ĐT TP.HCM cấp lần đầu ngày
                30 tháng 05 năm 2007
              </li>
            </ul>
          </StyledFooterColumn>
          <StyledFooterColumn className="w-3-6">
            <div className="title">Liên hệ</div>
            <ul className="list">
              <li className="row column-direction column-start">
                <div className="row-title">Địa chỉ trụ sở chính Hải phòng:</div>
                176 Quán Trữ - Kiến An - Hải... 176 Quán Trữ, Kiến An, Haiphong, Vietnam 100000.
              </li>
              <li className="row column-direction column-start">
                <div className="row-title">Văn phòng điều hành Thanh Trì:</div>
                Trường Cao Đăng Công Nghệ Bách Khoa Hà Nội.
              </li>
              <li className="row column-direction column-start">
                <div className="row-title">Văn phòng điều hành Hà Nội:</div>
                Trường Cao Đăng Công Nghệ Bách Khoa Hà Nội.
              </li>
            </ul>
          </StyledFooterColumn>
        </div>
      </StyledBottomFooter>
      <div className="version">version: 2.1.0</div>
    </StyledFooterWrap>
  );
}
export default Footer;
