import { useStore } from "@nanostores/react";

import { isReadListOpen } from "../store/readListStore";

export default function ReadListFlyoutToggle() {
  const $isReadListFlyoutOpen = useStore(isReadListOpen);
  return (
    <button
      type="button"
      className="fixed z-50 top-4 h-10 right-0 mt-4 mr-4 text-white text-sm font-medium uppercase bg-pink-500 py-2 px-4 rounded-lg hover:bg-gradient-to-br from-pink-200 to-pink-900"
      onClick={() => isReadListOpen.set(!$isReadListFlyoutOpen)}
    >
      Books List
    </button>
  );
}
