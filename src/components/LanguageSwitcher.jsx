import { useTranslation } from "react-i18next"

export default function LanguageSwitcher(){

  const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return(

    <div className="flex gap-2">

      <button onClick={()=>changeLanguage("en")} className="px-2 py-1 border rounded">
        EN
      </button>

      <button onClick={()=>changeLanguage("ru")} className="px-2 py-1 border rounded">
        RU
      </button>

      <button onClick={()=>changeLanguage("lv")} className="px-2 py-1 border rounded">
        LV
      </button>

    </div>

  )
}