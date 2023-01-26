import React, {useContext, useEffect} from 'react';
import styles from '../styles/pages/index.module.scss';
import classNames from "classnames";
import Image from 'next/image';
export default function Index () {


    return (
        <>
            <div className={classNames(styles.header, 'section')}>
                <div className={classNames('container', styles.headergrid)}>
                    <div className={styles.title}>
                    </div>
                    <div className={styles.featured}>
                        <div className={styles.star}>
                        </div>
                    </div>
                    <div className={styles.image}>
                        <Image src="/images/gyoza.jpg" alt="gyoza" width={630} height={455} />
                    </div>
                </div>
            </div>


            <div className={classNames(styles.top, 'section')}>
                <div className={styles.title}>
                    <p>Recipes</p>
                </div>
                <div className={styles.search}>
                    <div className={styles.icon}>
                        <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
                            <g id="home" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.33">
                                <g id="Extra-Large" transform="translate(-597.000000, -539.000000)" fill="#000000" fillRule="nonzero">
                                    <path d="M605.976825,539 C601.029802,539 597,543.028434 597,547.973794 C597,552.919118 601.029802,556.955354 605.976825,556.955354 C608.089848,556.955354 610.033177,556.215133 611.569073,554.986067 L615.30828,558.722039 C615.700766,559.098141 616.321952,559.091791 616.706663,558.707745 C617.091374,558.3237 617.098589,557.702734 616.722905,557.309859 L612.983698,553.571928 C614.214204,552.034192 614.955598,550.088539 614.955598,547.973794 C614.955598,543.028434 610.923847,539 605.976825,539 L605.976825,539 Z M606,541 C609.87892,541 613,544.119357 613,547.996108 C613,551.87286 609.87892,555 606,555 C602.12108,555 599,551.87286 599,547.996108 C599,544.119357 602.12108,541 606,541 Z" id="circle2017"></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Find your new favourites..."
                    />
                </div>
                <div className={styles.filter}>
                </div>
            </div>
            <div className={classNames(styles.content, 'container')}>
                <div className={styles.categories}>
                </div>
                <div className={styles.recipes}>

                </div>
                <div className={styles.shoppinglist}>

                </div>
            </div>
        </>
    );
}

Index.getLayout = function getLayout(page) {
    return (
<div>
    {page}
</div>

    );
};
