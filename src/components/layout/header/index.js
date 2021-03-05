import { Container, Row, Col } from "react-bootstrap";
import styled, { keyframes } from 'styled-components';

import { IconContext } from "react-icons";
import { FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa';

const fadeIn = keyframes`
  from {
    box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0ae0fc, 0 0 40px #0ae0fc, 0 0 50px #0ae0fc, 0 0 60px #0ae0fc, 0 0 70px #0ae0fc, 0 0 80px #0ae0fc;
  }
  to {
    box-shadow: 0 0 20px #fff, 0 0 30px #0247c9, 0 0 40px #0247c9, 0 0 50px #0247c9, 0 0 60px #0247c9, 0 0 70px #0247c9, 0 0 80px #0247c9;
  }
`;
const Cont = styled(Container)`
  width: 100%;
  padding: 0;
  overflow: hidden;
`;

const RowTopH = styled(Row)`
  text-align: right;
  padding-right: 20px;
  background-color: #343A40;
`;

const NeonLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #E1E1E6;
  padding: 0;
`;

const TopHeader = () => {
    return(
      <Cont fluid  >
        <RowTopH>
          <Col>
            <IconContext.Provider value={{ color: "#A1A1A6", size: "1.8em" }}>
              <FaLinkedinIn onClick={() => window.open('https://www.linkedin.com/in/emersonope/')} style={{paddingLeft: 10, cursor: 'pointer',}} />
              <FaGithub onClick={() => window.open('https://github.com/emersonope')} style={{paddingLeft: 10, cursor: 'pointer',}} />
            </IconContext.Provider> 
          </Col>
        </RowTopH>
        <NeonLine />
      </Cont>
    );
}

export default TopHeader;