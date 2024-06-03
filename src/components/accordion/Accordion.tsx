import { useState } from 'react';
import './accordion.scss';
import AccordionItem from './AccordionItem/AccordionItem';

const data = [
    {
        title: "Lorem ipsum, dolor sit amet adipisicing elit.",
        icon: "/first.svg",
        content: "Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit"
    },
    {
        title: "Lorem ipsum, dolor sit amet adipisicing elit.",
        icon: "/second.svg",
        content: "Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit"
    },
    {
        title: "Lorem ipsum, dolor sit amet adipisicing elit.",
        icon: "/third.svg",
        content: "Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit"
    },
    {
        title: "Lorem ipsum, dolor sit amet adipisicing elit.",
        icon: "/fourth.svg",
        content: "Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit"
    },
    {
        title: "Lorem ipsum, dolor sit amet adipisicing elit.",
        icon: "/fifth.svg",
        content: "Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit"
    }
]

function Accordion(){
    const [currentActive, setCurrentActive] = useState<number | false>(false);

    const handleItemClick = (index: number) => {
        index === currentActive 
        ? setCurrentActive(false) 
        : setCurrentActive(index);
    }

    return(
        <section className='accordion'>
            <h2 className='accordion__title'>Lorem ipsum, dolor sit adipisicing elit.</h2>
            <p className='accordion__subtitle'>Porro ab rerum omnis magnam eligendi error nobis dolore?</p>
            <div className='accordion__container'>
                {
                    //key должен быть уникальным и, желательно, не index
                    data.map((item, index) => <AccordionItem 
                        key={index} 
                        title={item.title} 
                        icon={item.icon} 
                        content={item.content}
                        isActive={currentActive === index}
                        setActive={() => handleItemClick(index)}/>)
                }
            </div>
        </section>
    )
}

export default Accordion;