import styled from "styled-components";
import { GithubIcon, LinkedInIcon } from "../Assets/Icons";

const SFooter = styled.footer`
  background-color: white;
  border-top: var(--border-lightGrey);
  padding: 80px 0;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      &:first-child {
        font-size: 14px;
        margin-bottom: 10px;
        a {
          border-bottom: var(--border-lightGrey-dashed);
          &:hover {
            color: var(--color-grey);
          }
        }
      }
      &:nth-child(2) {
        a {
          svg {
            width: 30px;
            height: 30px;
            border-radius: 3px;
            transition: all linear 0.2s;
          }
        }
        a:first-child {
          svg {
            stroke: var(--color-GHPurple);
            &:hover {
              background-color: var(--color-GHPurple);
              stroke: white;
            }
          }
        }
        a:nth-child(2) {
          svg {
            stroke: var(--color-LIBlue);
            &:hover {
              background-color: var(--color-LIBlue);
              stroke: white;
            }
          }
        }
      }
    }
  }
`;

const Footer = () => (
  <SFooter>
    <ul>
      <li>
        <span>&copy; {new Date().getFullYear()} Your Style Guide by </span>
        <a href="https://mina-park.netlify.app/">Mina Park</a>
      </li>
      <li>
        <a href="https://github.com/minapark127">{GithubIcon}</a>
        <a href="https://www.linkedin.com/in/mina-p-1a04571a9/">
          {LinkedInIcon}
        </a>
      </li>
    </ul>
  </SFooter>
);

export default Footer;
