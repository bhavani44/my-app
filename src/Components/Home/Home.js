import React from 'react';
import HomePageItem from './HomePageItem';
import './home.css'
const Home = () => {
    const items = [
        {
            id: 1,
            imgUrl: 'https://img.freepik.com/free-vector/fruit-salad-bowls-hand-drawn-design_23-2148494147.jpg?w=826&t=st=1665641830~exp=1665642430~hmac=3014773c04442e8369f5d6196e6f61b9295f865cac82c1fdb5cf6e63aa22c752',
            name: 'Food Health & Nutrition'
        },
        {
            id: 2,
            imgUrl: 'https://img.freepik.com/free-vector/tiny-persons-with-unhealthy-diet-carb-foods-sign-delicious-wheat-food-snacks-junk-flat-vector-illustration-food-nutrition-health-concept-banner-website-design-landing-web-page_74855-22075.jpg?w=1380&t=st=1665642281~exp=1665642881~hmac=6d424107aafb906b8f4b675d921181949c5495d4ff6fd125144fca2b0024c4b4',
            name: 'Carbohydrate'
        },
        {
            id: 3,
            imgUrl: 'https://img.freepik.com/free-vector/overweight-man-cartoon-character-lying-armchair-drinking-soda-physical-inactivity-passive-lifestyle-bad-habit-sedentary-lifestyle_335657-3592.jpg?w=826&t=st=1665643349~exp=1665643949~hmac=e3f03edbca3bd18c2e41651656d73e28f782e04729203887f27e8b228d0af300',
            name: 'Fat'
        },
        {
            id: 4,
            imgUrl: 'https://img.freepik.com/premium-photo/healthy-food-high-protein_82893-3.jpg?w=1380',
            name: 'Protein'
        },
        {
            id: 5,
            imgUrl: 'https://img.freepik.com/free-vector/infographic-with-different-colorful-vitamins_23-2148482192.jpg?w=826&t=st=1665643280~exp=1665643880~hmac=197ca545233d3c8df285fadb3ff582214bbc45195e907d1f7fb37ecda883843a',
            name: 'Vitamin'
        },
        {
            id: 6,
            imgUrl: 'https://img.freepik.com/free-vector/vitamin-mineral-complex_23-2148488990.jpg?w=826&t=st=1665642932~exp=1665643532~hmac=7e021d943444c2d90615150f8f857812749dbeac1d97e372df43bd5095ae3301',
            name: 'Minerals'
        }
    ]

    return (
        <>
            <HomePageItem data={items} />
        </>
    )
}
export default Home;