<template>
    <div>
        <div class="container-fluid">
            <div class="row no-gutters px-4">
                <div class="col-md-4 mt-5">
                    <h3 class="text-light">遊任有魚</h3>
                    <p class="text-muted mt-4">提供第一手的遊戲資訊</p>
                </div>
                <div class="offset-md-4 col-md-4 mt-5 subscribe">
                    <p class="text-light">訂閱我們的電子報</p>
                    <div class="subscribe-button mt-4">
                        <input type="mail" id="copy" class="form-control" placeholder="abc@xxx.com">
                        <button class="btn btn-light ml-2">訂閱</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

  <style scoped>
      .container-fluid{
          width: 100%;
          height: 17vh;
          background-color: #343a40;
      }

      .subscribe-button{
          display: flex;
      }

      .subscribe-button .form-control{
          height: 40px;
          width: 500px;
      }

      .subscribe-button .btn{
        box-sizing: content-box;
        height: 26px;
        }
  </style>