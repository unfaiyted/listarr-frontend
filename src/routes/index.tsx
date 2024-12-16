import { A } from "@solidjs/router";
import Counter from "~/components/Counter";
import { Popover } from "@kobalte/core/popover";
// import { CrossIcon } from "some-icon-library";
// import "./style.css";

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Hello world!</h1>
      <Counter />
      <p class="mt-8">
        Visit{" "}
        <a href="https://solidjs.com" target="_blank" class="text-sky-600 hover:underline">
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
      <p class="my-4">
        <span>Home</span>
        {" - "}
        <A href="/about" class="text-sky-600 hover:underline">
          About Page
        </A>{" "}
      </p>
  <Popover>
    <Popover.Trigger class="popover__trigger">Learn more</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content class="popover__content">
        <Popover.Arrow />
        <div class="popover__header">
          <Popover.Title class="popover__title">About Kobalte</Popover.Title>
          <Popover.CloseButton class="popover__close-button">
            {/* <CrossIcon /> */}
                +
          </Popover.CloseButton>
        </div>
        <Popover.Description class="popover__description">
          A UI toolkit for building accessible web apps and design systems with SolidJS.
        </Popover.Description>
      </Popover.Content>
    </Popover.Portal>
  </Popover>
    </main>
  );
}

