import { useState } from 'react';
import './accordion.scss';
import AccordionItem from './AccordionItem/AccordionItem';

const data = [
    {
        title: "Lorem ipsum, dolor sit amet adipisicing elit.",
        icon: "/first.svg",
        content: "Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit",
        id: 1
    },
    {
        title: "Lorem ipsum, dolor sit amet adipisicing elit.",
        icon: "/second.svg",
        content: "Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit",
        id: 2
    },
    {
        title: "Lorem ipsum, dolor sit amet adipisicing elit.",
        icon: "/third.svg",
        content: "Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit",
        id: 3
    },
    {
        title: "Lorem ipsum, dolor sit amet adipisicing elit.",
        icon: "/fourth.svg",
        content: "Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit",
        id: 4
    },
    {
        title: "Lorem ipsum, dolor sit amet adipisicing elit.",
        icon: "/fifth.svg",
        content: "Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit",
        id: 5
    }
]

function Accordion(){
    const [currentActive, setCurrentActive] = useState<number | false>(false);

    /**
     * Меняет стейт в зависимости от выбранного элемента аккордиона. 
     * Если выбран новый элемент, стейт меняется на индекс этого элемента. 
     * При повторном клике, стейт возвращается в idle состояние
     * @param index индекс выбранного элемента аккордиона
     */
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
                    data.map((item, index) => <AccordionItem 
                        key={item.id} 
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