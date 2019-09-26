/**
 * TOP画面
 *
 * see: 画面定義書_G-NHA-002_ALBUM画面_v1.1.xlsx
 */
import { ACTIONS } from '@/store/action-types'
// import axios from 'axios'
export const imagesViewModel = {
  name: 'Images',
  data() {
    return {
      albums:[],
      userid:null,
      filelength:null,
      filelename:null,
      picfile:[],
      url:this.$store.state.myapp.imagesItems.location
    }
  },
  created() {
    let params = {userid:this.$store.state.myapp.userName}
    this.$store.dispatch(ACTIONS.MYAPP_USER_ALBUM, params)
    this.albums = this.$store.state.myapp.data
    this.policyNo = ''
    var id = localStorage.getItem('id')
    this.id = id;
    var parambukenme = localStorage.getItem('bukenme')
    this.parambukenme = parambukenme
    var parampicnum = localStorage.getItem('picnum')
    this.parampicnum = parampicnum
    // let imagesparams = {userid: this.$store.state.myapp.userid}
    let imagesparams = {vrInfoId: localStorage.getItem('vrInfoId')};
    this.$store.dispatch(ACTIONS.MYAPP_ALBUM_IMAGES, imagesparams)
    files.splice(0,files.length)
  },
  computed: {
    isError: function () {
      return this.$store.state.configs.parameterError
    },
    isDevelop() {
      if (process.env.NODE_ENV === 'development') {
        return true
      }
      return false
    },
    items: function () {
      return this.$store.state.myapp.imagesItems
    }
  },
  methods: {
    selectedFile(e) {
      // 選択された File の情報を保存しておく
      e.preventDefault()
      let files = e.target.files
      this.uploadFile = files[0]
    },
    onecancel(index){
      this.picfile.splice(index,1)
    },
    allcancel() {
      this.picfile=[]
    },
    async imageUpload() {
      // FormData を利用して File を POST する
      // let formData = new FormData()
      // formData.append('yourFileKey', this.uploadFile)
      // let config = {
      //   headers: {
      //     'content-type': 'multipart/form-data'
      //   }
      // }
      // axios.post('/fileupload', formData, config)
      //   .then(response => {
      //     // response 処理
      //   })
      //   .catch()
      //   .finally()
      // // this.$store.dispatch(ACTIONS.FILE_UPLOAD, {file: this.uploadFile})
      const request = {
        fileType: this.fileType,
        fileName: this.albums.fileName,
        file: this.uploadFile
      }
      console.log('uploadstart')
      await this.$store.dispatch(ACTIONS.MYAPP_IMAGE_UPLOAD, request)
    },
    preview(event){
      let filelength = event.target.files.length
      this.filelength = filelength
      for (var i = 0; i < filelength; i++) {
        if (this.picfile.indexOf(event.target.files[i].name) === -1) {
          this.picfile.push(event.target.files[i].name)
        }
      }
    },
    getDataId (location) {
      localStorage.setItem('location', location)
      console.log('当前被点击的bukenme=' + location)
    },
    panoEdit (vrInfoId) {
      if (vrInfoId) {
        window.open("/myapp-backend/pano_edit.html?pid=" + vrInfoId);
      }
    },
    panoPreview (vrInfoId) {
      if (vrInfoId) {
        window.open("/myapp-backend/pano_preview.html?pid=" + vrInfoId);
      }
    },
    upload () {
      var inFile = document.getElementById("inFile");
      if (inFile.files && inFile.files.length > 0) {
        const key = this.$dlg.mask('<span style="font-size: 12px; margin-top: 20px;">アップロード中</span>', null, {
          width: 300,
          height:200
        });
        var vrInfoId = document.getElementById('vrInfoId');
        var inVrInfoId = document.getElementById('inVrInfoId');
        inVrInfoId.value=vrInfoId.innerText;
        var formdata= new FormData($("#formPanoImageUpload")[0]);
        $.ajax({
          //url: 'http://localhost:8080/myapp-backend/api/panoImageUpload',
          url: 'http://203.189.97.178:8080/myapp-backend/api/panoImageUpload',
          type: 'POST',
          context: this,
          data: formdata,
          processData: false,
          contentType : false,
          success: function () {
            this.$dlg.close(key);
            this.$dlg.alert('ファイルのアップロードに成功しました。', {
                messageType: 'info',
                language: 'jp'
            });
            let imagesparams = {vrInfoId: localStorage.getItem('vrInfoId')};
            this.$store.dispatch(ACTIONS.MYAPP_ALBUM_IMAGES, imagesparams)
          },
          error: function () {
            this.$dlg.close(key);
            this.$dlg.alert('ファイルのアップロードに失敗しました。', {
                messageType: 'error',
                language: 'jp'
            });
          }
        })
      } else {
        this.$dlg.alert('画像ファイルを選択してください。', {
            messageType: 'error',
            language: 'jp'
        });
      }
    }
  }
}
export default {
  imagesViewModel
}
