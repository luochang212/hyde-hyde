'use strict'

var sidebarTrigger = document.querySelector('.author-trigger')

function loadPanel(panel) {
  var frames = panel.querySelectorAll('iframe[data-src]')
  frames.forEach(function (frame) {
    if (!frame.closest('[hidden]')) {
      frame.src = frame.dataset.src
      frame.removeAttribute('data-src')
    }
  })
}

function openNav() {
  var activePanel = document.querySelector('.tabcontent:not([hidden])')
  document.getElementById('mySidenav').classList.add('is-open')
  document.getElementById('mySidenav').setAttribute('aria-hidden', 'false')
  document.getElementById('overlay').style.display = 'block'
  document.body.classList.add('drawer-open')
  sidebarTrigger.setAttribute('aria-expanded', 'true')
  loadPanel(activePanel)
  document.querySelector('.tablinks.active').focus()
}

function closeNav() {
  document.getElementById('mySidenav').classList.remove('is-open')
  document.getElementById('overlay').style.display = 'none'
  document.getElementById('mySidenav').setAttribute('aria-hidden', 'true')
  document.body.classList.remove('drawer-open')
  sidebarTrigger.setAttribute('aria-expanded', 'false')
  sidebarTrigger.focus()
}

function openItem(evt, itemName) {
  var i, tabcontent, tablinks
  tabcontent = document.getElementsByClassName('tabcontent')
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].hidden = true
  }
  tablinks = document.getElementsByClassName('tablinks')
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '')
    tablinks[i].setAttribute('aria-pressed', 'false')
  }
  document.getElementById(itemName).hidden = false
  evt.currentTarget.className += ' active'
  evt.currentTarget.setAttribute('aria-pressed', 'true')
  loadPanel(document.getElementById(itemName))
}

function showVideo(videoId) {
  ['video1', 'video2', 'video3'].forEach(function (id) {
    document.getElementById(id).hidden = id !== videoId
  })
  loadPanel(document.getElementById(videoId))
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && sidebarTrigger.getAttribute('aria-expanded') === 'true') {
    closeNav()
  }
})

document.querySelectorAll('#categories .drawer-category-list a').forEach(function (a) {
  a.addEventListener('click', function () { a.blur() })
})
