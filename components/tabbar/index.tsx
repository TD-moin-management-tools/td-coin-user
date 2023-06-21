'use client'
import { usePathname, useRouter } from 'next/navigation';
import {
    HomeTwoTone,
    SmileTwoTone,
    EditTwoTone,
    IdcardTwoTone
} from '@ant-design/icons';


const TABLE_INFO = [
    {
        name: '首页',
        key: 'home',
        path: '/',
        icon: <HomeTwoTone />,
        activeIcon: <HomeTwoTone twoToneColor="#eb2f96" />,
    },
    {
        name: '权益',
        key: 'rights',
        path: '/rights',
        icon: <SmileTwoTone />,
        activeIcon: <SmileTwoTone twoToneColor="#eb2f96" />,
    },
    {
        name: '自主填报',
        key: 'self-write',
        path: '/self-write',
        icon: <EditTwoTone />,
        activeIcon: <EditTwoTone twoToneColor="#eb2f96" />,
    },
    {
        name: '个人中心',
        key: 'user',
        path: '/user',
        icon: <IdcardTwoTone />,
        activeIcon: <IdcardTwoTone twoToneColor="#eb2f96" />,
    },
]

const TabBar = () => {
    const pathname = usePathname();
    const router = useRouter()

    const handleSwitchTab = (path: string): void => {
        router.push(path);
    };

    return (
        <div className='z-999 fixed bottom-0 flex h-16 w-full bg-[#f6f6f6] bg-opacity-90'>
            {TABLE_INFO.map(item => {
                const isSelected = pathname === `${item.path}`;
                const titleColor = isSelected ? 'text-[#eb2f96]' : 'text-neutral-400';
                const titleClass = `${titleColor} text-[10px] font-medium leading-[14px]`;

                return (
                    <div
                        key={item.key}
                        className='flex flex-1 flex-col items-center justify-center pt-1 text-center'
                        onClick={(): void => handleSwitchTab(item.path)}
                    >
                        <div className='relative inline-block h-7 w-24 flex items-center justify-center'>
                            {
                                isSelected ? item.activeIcon : item.icon
                            }
                        </div>

                        <div className={titleClass}>{item.name}</div>
                    </div>
                );
            })}
        </div>
    )
}

export default TabBar;