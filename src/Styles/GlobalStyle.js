import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {

    -webkit-tap-highlight-color: transparent;

    body{
      background-color: var(--color-bg-blue);
    }
    
    // spacing

    --main-spacing: 1rem;
    --main-bottom-spacing: 8rem;
    --header-padding: var(--main-spacing);
    --nav-top-border: 0.25rem;

    // border

    --border-card: 0.5rem;
    --border-btn: 0.75rem;

    // font

    --readex-pro: 'Readex Pro', sans-seri;
    --inter: 'Inter', sans-serif;

    --light: 300;
    --regular: 400;
    --medium: 500;
    --semi-bold: 600;
    --bold: 700;

    // colors

    --transparent: rgba(255, 255, 255, 0);
    --color-modal-background: rgba(19, 19, 19, 0.6);

    --color-black: #131313;

    // Profile

    --icon-profile-header: 2rem;
    --profile-pic-size: 6.5rem;

  }
`;
