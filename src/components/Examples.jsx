import { useState } from 'react';
import Section from './Section.jsx';
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';
import Tabs from './Tabs.jsx';


export default function Examples(){
    const [SelectedTab , SetSelectedTab] = useState(null);

    function handleSelect(SelectedButton){
        SetSelectedTab(SelectedButton)
    }

    let tabContent = <p>Please select a topic.</p>;

    if(SelectedTab){
        tabContent = (
            <div id='tab-content'>
            <h3>{EXAMPLES[SelectedTab].title}</h3>
            <p>{EXAMPLES[SelectedTab].description}</p>
            <pre>
                <code>
                {EXAMPLES[SelectedTab].code}
                </code>
            </pre>
            </div>
        );
    }

    return (
        <Section title='Examples' id='examples'>
            <Tabs buttonContainer="menu"
                Button={<>
                <TabButton isSelect={SelectedTab === "components"} onClick={()=>handleSelect("components")}>Components</TabButton>
                <TabButton isSelect={SelectedTab === "jsx"} onClick={()=>handleSelect("jsx")}>Jsx</TabButton>
                <TabButton isSelect={SelectedTab === "props"} onClick={()=> handleSelect("props")}>Props</TabButton>
                <TabButton isSelect={SelectedTab === "state"} onClick={()=>handleSelect("state")}>State</TabButton>
            </>}
            >
                {tabContent}
            </Tabs>            
        </Section>
    );
}