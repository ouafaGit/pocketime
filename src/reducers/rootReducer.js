const initState = {
    posts: [
        {id: '1', title: 'Squirtle laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur anim nulla aute ut eiusmod qui anim voluptate. Commodo elit ex aliquip aute incididunt eiusmod cillum velit ullamco qui cupidatat ullamco anim dolor. Cupidatat mollit voluptate est qui aliquip exercitation magna anim adipisicing. In sint enim non culpa ex incididunt amet aute reprehenderit adipisicing. Exercitation deserunt velit enim fugiat nostrud Lorem. Non aliqua excepteur nostrud aliqua ipsum reprehenderit. Aliqua sit exercitation do excepteur elit laborum.'},
        {id: '2', title: 'Charmender laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur anim nulla aute ut eiusmod qui anim voluptate. Commodo elit ex aliquip aute incididunt eiusmod cillum velit ullamco qui cupidatat ullamco anim dolor. Cupidatat mollit voluptate est qui aliquip exercitation magna anim adipisicing. In sint enim non culpa ex incididunt amet aute reprehenderit adipisicing. Exercitation deserunt velit enim fugiat nostrud Lorem. Non aliqua excepteur nostrud aliqua ipsum reprehenderit. Aliqua sit exercitation do excepteur elit laborum.'},
        {id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum, dolor sit amet consectetur anim nulla aute ut eiusmod qui anim voluptate. Commodo elit ex aliquip aute incididunt eiusmod cillum velit ullamco qui cupidatat ullamco anim dolor. Cupidatat mollit voluptate est qui aliquip exercitation magna anim adipisicing. In sint enim non culpa ex incididunt amet aute reprehenderit adipisicing. Exercitation deserunt velit enim fugiat nostrud Lorem. Non aliqua excepteur nostrud aliqua ipsum reprehenderit. Aliqua sit exercitation do excepteur elit laborum.'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id 
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;