import UpDown from "./components/Animations/UpDown";

export const Animations = [
  {
    id: 1,
    title: "Up-Down",
    animation: UpDown(),
    category: "Css",
    html: `<div class="loader">
  <span></span>
  <span></span>
  <span></span>
</div>`,
    css: `body {
      margin: 0;
    }

    .loader {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      height: 100vh;
      background-color: #0d1117;
    }

    .loader span {
      width: 15px;
      height: 15px;
      background-color: #4ade80;
      border-radius: 50%;
      animation: bounce 0.6s infinite alternate;
    }

    .loader span:nth-child(2) {
      animation-delay: 0.2s;
    }
    .loader span:nth-child(3) {
      animation-delay: 0.4s;
    }

    @keyframes bounce {
      to {
        transform: translateY(-15px);
        opacity: 0.5;
      }
    }
    `,
  },
  { id: 2, title: "TestStyle", animation: UpDown(), category: "Css" },
  { id: 3, title: "animation", animation: UpDown(), category: "Css" },
  { id: 4, title: "CSS", animation: UpDown(), category: "Css" },
];
