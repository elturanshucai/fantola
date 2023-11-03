import React from 'react'

export default function About() {
  return (
    <div className='about h-screen flex items-center justify-center text-teal-700'>
      <div className="">
        <img src="about.png" alt="" />
      </div>
      <div className="flex flex-col gap-5 font-semibold text-lg w-1/2">
        <p>Aqualife, Rusiya bazarının ən böyük geleneksel ailə içkiləri sahəsində ən mühüm eksperti, gənc hədəf auditoriyasının tələblərinə cavab verən bir brendi portfelini genişlətməyə qərar verdi.</p>
        <p>Həyata keçirilən işin nəticəsində agentlik Fantola məhsulları üçün orijinal dizayn konseptini təklif etdi. Bizim rəsmkarlarımız tərəfindən hazırlanan unikal fantastik təsvirlər kollaclama texnikasında hazırlanmışdır və kampaniyanın əsas məqsədini əks etdirir, cari tendensiyalara (infantilizm, ironiya və s.) cavab verir və müxtəlif dad birliyində əks olunur.</p>
        <p>Digər bir deyil, agentlik Rusiya bazarında gənc hədəf auditoriyası üçün ən unikal brend yaradmağı bacardı. Fantola gənc yaşlıların trend atributu halına gəldi və sosial mediada düzgün şəkildə adlandırıldı.</p>
      </div>
    </div>
  )
}
