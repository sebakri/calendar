import './App.css'

function App() {
  return (
    <div data-theme="light" class="grid grid-cols-main min-h-full min-w-full pt-10">
      <div id="sidebar" class="bg-gradient-to-t from-gray-50 to-transparent px-10">
        <span id="app-name" class="text-2xl font-bold">Calendar</span>
        <ul class="menu menu-lg w-56 mt-8 px-0 gap-2">
          <li>
            <a class="bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              Appointments
            </a>
          </li>
          <li>
            <a class="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Settings
            </a>
          </li>
        </ul>
      </div>
      <div class="container mx-auto px-12">
        <h1>Appointments</h1>
        <h2 class="text-gray-400">See your scheduled appointments from all of your calendars.</h2>
        <div class="py-10 flex">
          <div class="tabs tabs-boxed gap-5">
            <a class="tab tab-lg m-1 bg-white text-current tab-lifted">Upcoming</a>
            <a class="tab tab-lg m-1">Pending</a>
            <a class="tab tab-lg m-1">Recurring</a>
            <a class="tab tab-lg m-1">Past</a>
            <a class="tab tab-lg m-1">Cancelled</a>
          </div>
        </div>
        <div class="grid">
          <div class="border-gray-100 rounded-lg border-2 grid grid-cols-[auto_1fr]">
            <div class="px-12 py-5 p">
              <div class="text-xl text-orange-600">
                Wed
              </div>
              <div class="text-4xl font-bold text-orange-600">
                28
              </div>
            </div>

            <div class="px-12 py-5 grid grid-cols-[auto_1fr] gap-x-10 grid-coli border-l-2 border-gray-100 content-center gap-3">
              <div>09:00 - 09:30</div>
              <div>Meeting with John</div>
              <div>Zoom</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
