import React from 'react';
import { Link } from 'react-router-dom';

const Farmersidebar = () => {
  return (
    <div>
      <ul>
        <li><Link to="#">팜 정보 관리</Link></li>
        <li><Link to="#">?</Link></li>
        <li><Link to="#">못난이 매칭 요청서 보기</Link></li>
        <li><Link to="#">견적 현황</Link></li>
        <li><Link to="#">결제 완료 현황</Link></li>
        <li><Link to="#">배송 현황</Link></li>
        <li><Link to="#">정산 내역</Link></li>
      </ul>


    </div>
  );
}

export default Farmersidebar;