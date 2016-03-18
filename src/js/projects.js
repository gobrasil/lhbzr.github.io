/* global TimelineMax */

const projects = document.querySelector('.projects')
const projectsBtnOpen = document.querySelector('.js-projects-open')
const projectsBtnClose = document.querySelector('.home, .projects-link')
const projectsLink = document.querySelectorAll('.projects-link')

/**
 * Functions: Open and Close.
 */
export function projectsOpen () {
  const timeline = new TimelineMax()

  timeline
    .to(projectsBtnOpen, 0.2, { autoAlpha: 0 })
    .to(projects, 0.4, { x: '0%' })
    .staggerFromTo(projectsLink, 0.4, { autoAlpha: 0, scale: 0.5, x: '-100%' }, { autoAlpha: 1, scale: 1, x: '0%' }, 0.075, '-= 0.2')
}

export function projectsClose () {
  const timeline = new TimelineMax()

  timeline
    .to(projects, 0.4, { x: '-100%' })
    .to(projectsBtnOpen, 0.2, { autoAlpha: 1 })
}

/**
 * Functions: Enter and Leave.
 */
function projectsMouseEnter (link) {
  const timeline = new TimelineMax()

  timeline
    .to(link.querySelector('.projects-title-hover'), 0.4, { right: '10px' }, 'hover')
    .to(link.querySelector('.projects-title-bg'), 0.4, { right: '4px' }, 'hover')
    .to(link.querySelector('.projects-tag'), 0.4, { opacity: 1, maxHeight: '15px' }, 'hover')
    .to(link.querySelector('.projects-square-left'), 0.4, { y: '0%' }, 'hover')
    .to(link.querySelector('.projects-square-bottom'), 0.4, { x: '0%' }, 'hover')
    .to(link.querySelector('.projects-square-right'), 0.4, { y: '0%' }, 'hover')
    .to(link.querySelector('.projects-square-top'), 0.4, { x: '0%' }, 'hover')
}

function projectsMouseLeave (link) {
  const timeline = new TimelineMax()

  timeline
    .to(link.querySelector('.projects-title-hover'), 0.4, { right: '100%' }, 'hover')
    .to(link.querySelector('.projects-title-bg'), 0.4, { right: '100%' }, 'hover')
    .to(link.querySelector('.projects-tag'), 0.4, { opacity: 0, maxHeight: 0 }, 'hover')
    .to(link.querySelector('.projects-square-top'), 0.4, { x: '100%' }, 'hover')
    .to(link.querySelector('.projects-square-right'), 0.4, { y: '100%' }, 'hover')
    .to(link.querySelector('.projects-square-bottom'), 0.4, { x: '-100%' }, 'hover')
    .to(link.querySelector('.projects-square-left'), 0.4, { y: '-100%' }, 'hover')
}

/**
 * Function: Projects.
 */
export function projectsSet () {
  /**
   * Event Listeners: Open and Close.
   */
  projectsBtnOpen.addEventListener('click', (e) => {
    projectsOpen()

    e.preventDefault()
    e.stopPropagation()
  })

  projectsBtnClose.addEventListener('click', (e) => {
    projectsClose()

    e.preventDefault()
  })

  /**
   * Event Listeners: Enter and Leave.
   */
  Array.from(projectsLink).forEach((link) => {
    link.addEventListener('mouseenter', () => {
      projectsMouseEnter(link)
    })

    link.addEventListener('mouseleave', () => {
      projectsMouseLeave(link)
    })
  })
}
