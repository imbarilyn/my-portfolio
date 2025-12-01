import { useState } from 'react';

export interface TabItem {
    id: string;
    value: string
}


export const useTabs = (tabs: TabItem[], defaultTab: string) =>{
    const [activeTab, setActiveTab] = useState(defaultTab)


    const switchTab = (tabValue: string) => {
        const selectedTab = tabs.find(t =>t.value === tabValue ) as TabItem
        setActiveTab(selectedTab.value)

    //     scroll the section into view
        const el: HTMLDivElement = document.getElementById(tabValue) as HTMLDivElement
        if(el){
            el.scrollIntoView({ behavior: "smooth" })
        }

    }

    return {
        activeTab,
        tabs,
        switchTab
    }
}