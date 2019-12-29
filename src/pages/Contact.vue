<template>
  <Layout>
    <h1 class="font-display text-4xl pb-4">Contact me</h1>

    <div class="bg-orange-500 p-6 rounded">
      <form class="w-full max-w-lg" action="https://formspree.io/mqkeynyk" method="POST">
        <div class="flex flex-wrap -mx-3">
          <div class="w-full md:w-1/2 px-3 md:mb-0">
            <label class="font-body block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
              First Name
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-800 font-display border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name="name" placeholder="Jane" required>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="font-body block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
              Last Name (Optional)
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-800 font-display border border-white rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" name="lastname" placeholder="Doe">
          </div>
        </div>
        <div class="flex flex-wrap -mx-3">
          <div class="w-full px-3 md:mb-0">
            <label class="font-body block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-email">
              Your email
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-800 font-display border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" name="_replyto" placeholder="hello@youremail.com" required>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3">
          <div class="w-full px-3 md:mb-0">
            <label class="font-body block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
              Your phone (optional)
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-800 font-display border border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="tel" name="phone" placeholder="+52 (444) 837 0849">
          </div>
        </div>
        <div class="flex flex-wrap -mx-3">
          <div class="w-full px-3">
            <label class="font-body block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
              Message
            </label>
            <textarea class="h-32 appearance-none block w-full bg-gray-200 text-gray-800 font-display border border-white rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Anything you want to say?" name="message" required></textarea>
          </div>
        </div>

        <input type="submit" value="Send" class="mt-6 bg-white text-orange-500 font-bold uppercase font-body px-8 py-4 w-full">
      </form>
    </div>
  </Layout>
</template>
