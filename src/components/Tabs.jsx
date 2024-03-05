export default function Tabs({children, Button, buttonContainer="menu6"}){
    const ButtonContainer = buttonContainer;
    return <>
        
        <ButtonContainer>{Button}</ButtonContainer>
        {children}
    </>
}