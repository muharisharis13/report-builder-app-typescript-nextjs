import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";

export default function Example(props: { children: any; list_menu: any }) {
  const { children, list_menu } = props;

  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full text-sm font-medium text-white rounded-md  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {children}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 z-10 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {list_menu.map((item: any, idx: number) => (
              <div
                className="px-1 py-1 cursor-pointer"
                onClick={item.path === "#" ? item?.onClick : null}
                key={idx}
              >
                <Menu.Item key={idx}>
                  {({ active }) => (
                    <a
                      href={item.path !== "#" && item.path}
                      className={`${
                        active ? "bg-cyan-700 text-white" : "text-gray-900"
                      } group flex rounded-sm  items-center w-full px-2 py-2 text-sm`}
                    >
                      {item.name}
                    </a>
                  )}
                </Menu.Item>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
