const express = require('express') // express 모듈사용
var cors = require('cors') //cors 모듈사용
const app = express() //express 모듈을 사용해서 앱서버 만들기
app.use(cors()) // 만든 서버에 코스모듈 사용

app.get('/sound/:name', (req, res)=> {
  
  const {name} = req.params
  if(name=='dog'){
    res.json({'sound':'멍멍'})
  }
  else if (name=='pig'){
    res.json({'sound':'피그피그'})
  }
  else if (name=='cat'){
    res.json({'sound':'야옹'})
  }

})

app.listen(3000)