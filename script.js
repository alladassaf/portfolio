const navTags = document.querySelectorAll('ul li')
const sections = document.querySelectorAll('section')
const indicator = document.querySelector('.indicator')



const options = {
    threshold: 0.2
}

/* window.onscroll = () => {
    if (pageYOffset >= 300) {
        
    }
} */


const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            addShowClass(entry.target)
            sections.forEach((sec, index) => {
                if (index != 0) {
                    const sectionChildren = [...sec.children]
                    if (sections[sections.length - 1] == entry.target.parentElement) {
                        sectionChildren.forEach(child => {
                            if (sectionChildren[sectionChildren.length - 1].classList.contains("show")) {
                                sectionObserver.unobserve(child)
                                console.log("unobserved")
                            }
                        })
                    }
                }
                
            })
        }
    })
}, options)


function addShowClass(element) {
    element.classList.add("show")
}

sections.forEach((sec, index) => {
    if (index != 0) {
        const sectionChildren = [...sec.children]

        sectionChildren.forEach(child => {
            sectionObserver.observe(child)
        })
    }
    
})