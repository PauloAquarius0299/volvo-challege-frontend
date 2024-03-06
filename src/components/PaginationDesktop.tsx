import { Flex, IconButton } from "vcc-ui";



interface PaginationDesktopProps {
    onClickLeft: () => void;
    onClickRight: () => void;

}
export default function PaginationDesktop({onClickLeft, onClickRight} : PaginationDesktopProps){
    return(
        
        <Flex
        extend={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexDirection: 'row',
            display: 'flex',
            gap: '8px',
            
          }}
        >
            <IconButton variant="outline" onClick={onClickLeft} aria-label="esquerdo" iconName="navigation-chevronback"   />
            
            <IconButton variant="outline" onClick={onClickRight} aria-label="direita" iconName="navigation-chevronforward"   />
        
        </Flex>
    )
}