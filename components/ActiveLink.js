import { useRouter } from "next/router";

function ActiveLink({ children, href }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return href === 'login' ? (
    <a
      href={href}
      onClick={handleClick}
      className="flex w-full w-32 items-center font-bold tracking-wide bg-blue-900 text-white hover:bg-blue-800 justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium md:py-4 md:px-10 md:text-lg"
    >
      {children}
    </a>
  ) : (
    <a
      href={href}
      onClick={handleClick}
      className="flex w-full w-32 items-center font-bold tracking-wide bg-red-900 text-white hover:bg-red-800 justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium md:py-4 md:px-10 md:text-lg"
    >
      {children}
    </a>
  );
}

export default ActiveLink;
