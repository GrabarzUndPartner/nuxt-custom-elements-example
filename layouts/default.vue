<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  box-sizing: border-box;
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  padding: 10px 30px;
  color: #3b8070;
  text-decoration: none;
  border: 1px solid #3b8070;
  border-radius: 4px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

a {
  color: #3b8070;
}

.button--grey {
  display: inline-block;
  padding: 10px 30px;
  margin-left: 15px;
  color: #35495e;
  text-decoration: none;
  border: 1px solid #35495e;
  border-radius: 4px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

fieldset {
  width: 100%;
  max-width: 640px;
  padding: 30px;
  padding-top: 0;
  color: #3b8070;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAChJREFUeNpi/P//PwM6OHv2HIYgEwORYAAVsmBzuLGxEeNQ9AxAgAEAG1wKejjL7dsAAAAASUVORK5CYII=');
  border: 1px solid #3b8070;
  border-radius: 4px;
}

fieldset legend {
  padding: 5px 15px;
  margin-bottom: 30px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  background: #3b8070;
  border: 1px solid #3b8070;
  border-radius: 4px;
}
</style>
