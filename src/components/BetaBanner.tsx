interface BetaBannerProps {
  closeHandler: () => void;
}

export function BetaBanner({ closeHandler }: BetaBannerProps) {
  return (
    <div className="flex-col sm:flex-row flex gap-4 z-50 p-4 left-5 md:left-auto right-5 bottom-5 bg-yellow-50 shadow-sm border-2 items-center border-yellow-300 rounded-md fixed">
      <div className="">
        Приложение находится в <span className="text-yellow-600">бета</span>{' '}
        режиме. Свои предложения можно писать{' '}
        <a
          className="text-blue-500 hover:underline"
          href="https://vk.com/wardxela"
        >
          сюда
        </a>
        .{' '}
      </div>
      <button
        className="px-4 block ml-auto rounded-md py-1 bg-yellow-500 text-white font-medium hover:bg-yellow-600 transition-colors"
        onClick={() => closeHandler()}
      >
        Ок
      </button>
    </div>
  );
}
