/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Star, 
  CalendarCheck, 
  Award, 
  Droplet, 
  CheckCircle2, 
  ArrowRight, 
  Facebook, 
  Instagram, 
  Twitter, 
  MapPin, 
  Phone, 
  Mail,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 selection:bg-brand-500 selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center text-white">
                <Droplet className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-2xl text-brand-900 tracking-tight">Aqua<span className="text-brand-500">Clear</span></span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#sobre" className="text-gray-600 hover:text-brand-500 font-medium transition-colors">Sobre Nós</a>
              <a href="#servicos" className="text-gray-600 hover:text-brand-500 font-medium transition-colors">Serviços</a>
              <a href="#como-funciona" className="text-gray-600 hover:text-brand-500 font-medium transition-colors">Como Funciona</a>
              <a href="#portfolio" className="text-gray-600 hover:text-brand-500 font-medium transition-colors">Resultados</a>
              <a href="#cotacao" className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-md shadow-accent-500/30">
                Orçamento Grátis
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-brand-900">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
              <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-600 font-medium">Sobre Nós</a>
              <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-600 font-medium">Serviços</a>
              <a href="#como-funciona" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-600 font-medium">Como Funciona</a>
              <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-600 font-medium">Resultados</a>
              <a href="#cotacao" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-accent-500 font-bold">Orçamento Grátis</a>
            </div>
          </div>
        )}
      </nav>

      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden min-h-[90vh] flex items-center">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 z-0 bg-parallax"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop")',
            backgroundPosition: 'center 20%'
          }}
        >
          {/* Gradient Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-900/70 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-100 border border-brand-500/30 mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-accent-500 animate-pulse"></span>
              <span className="text-sm font-medium">Especialistas em Água Limpa</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
              Piscina Cristalina, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-100 to-brand-500">Sem Esforço</span> para Você.
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed">
              Sua piscina está sempre pronta para o mergulho. Nós cuidamos de tudo, você só relaxa e aproveita os melhores momentos.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a href="#cotacao" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-brand-900 bg-accent-500 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(245,166,35,0.4)]">
                <span className="relative z-10 flex items-center gap-2">
                  Solicitar Orçamento Rápido
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a href="#servicos" className="px-6 py-4 text-white font-medium hover:text-brand-100 underline underline-offset-4 decoration-brand-500/50 hover:decoration-brand-500 transition-all">
                Agendar Manutenção Semanal
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Sobre Nós / Confiança */}
      <section id="sobre" className="py-20 bg-white relative z-20 -mt-10 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-900 mb-4">Sua Piscina em Mãos Especialistas.</h2>
            <p className="text-gray-600 text-lg">
              Com anos de experiência, nossa dedicação é garantir que sua área de lazer seja um ambiente seguro, limpo e perfeito para sua família o ano todo.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Star, title: "Qualidade 5 Estrelas", color: "text-accent-500", bg: "bg-accent-500/10" },
              { icon: CalendarCheck, title: "Atendimento Pontual", color: "text-brand-500", bg: "bg-brand-500/10" },
              { icon: Award, title: "Equipe Especializada", color: "text-emerald-500", bg: "bg-emerald-500/10" },
              { icon: Droplet, title: "Água Perfeita", color: "text-blue-500", bg: "bg-blue-500/10" }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors cursor-default"
              >
                <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-4 transform rotate-3 hover:rotate-6 transition-transform`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="font-bold text-gray-900">{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Nossos Serviços */}
      <section id="servicos" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 font-semibold tracking-wider uppercase text-sm">O que fazemos</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-900 mt-2">Soluções Completas para Sua Piscina.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Limpeza Semanal",
                desc: "Limpeza de fundo, bordas, peneiração e reposição química básica.",
                img: "https://images.unsplash.com/photo-1583315253896-101186714249?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Manutenção Química",
                desc: "Análise rigorosa, equilíbrio de pH, alcalinidade e cloração precisa.",
                img: "https://images.unsplash.com/photo-1519363032590-785311e95f19?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Limpeza Profunda",
                desc: "Tratamento de choque, decantação e recuperação de água verde.",
                img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Reparos de Equipamentos",
                desc: "Manutenção rápida e preventiva de filtros, bombas e aquecedores.",
                img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop"
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-900 mb-2 group-hover:text-brand-500 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                  <div className="mt-4 flex items-center text-brand-500 font-medium text-sm">
                    Saiba mais <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Como Funciona */}
      <section id="como-funciona" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-900">O Caminho para Sua Piscina Perfeita.</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Um processo simples e transparente para garantir sua tranquilidade.</p>
          </div>

          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                { step: "01", title: "Agendamento", desc: "Agende sua consulta grátis em minutos pelo site ou WhatsApp." },
                { step: "02", title: "Atendimento", desc: "Nossos especialistas realizam o serviço com excelência e pontualidade." },
                { step: "03", title: "Relaxamento", desc: "Desfrute de sua piscina cristalina, segura e pronta para uso." }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 relative text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-brand-900 text-white rounded-full flex items-center justify-center font-display font-bold text-2xl mb-6 shadow-lg shadow-brand-900/20">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Portfólio e Depoimentos */}
      <section id="portfolio" className="py-24 bg-brand-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-brand-500 font-semibold tracking-wider uppercase text-sm">Nosso Trabalho</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Resultados que Nossos Clientes Amam.</h2>
            </div>
            <div className="flex gap-2">
              {/* Carousel controls placeholder */}
              <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
              <button className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center hover:bg-brand-400 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Before/After Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1572331165267-854da2f10ccc?q=80&w=1000&auto=format&fit=crop" 
                alt="Piscina limpa" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="flex gap-3 mb-3">
                  <span className="px-3 py-1 text-xs font-bold bg-white/20 backdrop-blur-md rounded-full text-white border border-white/30">Antes: Verde</span>
                  <span className="px-3 py-1 text-xs font-bold bg-brand-500 rounded-full text-white">Depois: Cristalina</span>
                </div>
                <h3 className="text-2xl font-bold">Recuperação de Choque em 48h</h3>
              </div>
            </motion.div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { name: "Carlos Silva", role: "Proprietário", text: "Nunca vi minha piscina tão limpa. A equipe é extremamente profissional e pontual. Recomendo de olhos fechados!" },
                { name: "Mariana Costa", role: "Síndica", text: "Resolveram um problema crônico na bomba que outras empresas não conseguiam. Serviço impecável." },
                { name: "Roberto Alves", role: "Cliente Mensal", text: "A tranquilidade de ter a manutenção semanal com eles não tem preço. Chego no fim de semana e é só aproveitar." },
                { name: "Ana Paula", role: "Proprietária", text: "Atendimento rápido e preço justo. Explicaram todo o processo químico de forma que eu pudesse entender." }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <div className="flex text-accent-500 mb-4">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-800 flex items-center justify-center font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{testimonial.name}</h4>
                      <span className="text-xs text-gray-400">{testimonial.role}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Formulário de Cotação Rápida */}
      <section id="cotacao" className="py-24 bg-brand-100 relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-brand-900 rounded-b-[3rem] md:rounded-b-[5rem] z-0"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-2 bg-brand-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-800 rounded-full opacity-50 blur-3xl"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-display font-bold mb-4">Pronto para ter a Piscina dos Sonhos?</h3>
                  <p className="text-brand-100 mb-8 opacity-80">Preencha o formulário e nossa equipe entrará em contato em até 30 minutos com um orçamento sem compromisso.</p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-brand-500" />
                      </div>
                      <div>
                        <p className="text-xs text-brand-100 opacity-70">Ligue para nós</p>
                        <p className="font-bold">(11) 99999-9999</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-brand-500" />
                      </div>
                      <div>
                        <p className="text-xs text-brand-100 opacity-70">Envie um e-mail</p>
                        <p className="font-bold">contato@aquaclear.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-3 p-10">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Nome Completo</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all outline-none bg-gray-50 focus:bg-white" placeholder="João Silva" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">E-mail</label>
                      <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all outline-none bg-gray-50 focus:bg-white" placeholder="joao@email.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Tipo de Serviço</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all outline-none bg-gray-50 focus:bg-white appearance-none">
                      <option value="">Selecione o serviço desejado...</option>
                      <option value="semanal">Manutenção Semanal</option>
                      <option value="choque">Tratamento de Choque (Água Verde)</option>
                      <option value="reparo">Reparo de Equipamentos</option>
                      <option value="outro">Outros</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Tamanho da Piscina</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all outline-none bg-gray-50 focus:bg-white appearance-none">
                      <option value="">Selecione o tamanho aproximado...</option>
                      <option value="pequena">Pequena (até 20.000 Litros)</option>
                      <option value="media">Média (20.000 a 50.000 Litros)</option>
                      <option value="grande">Grande (acima de 50.000 Litros)</option>
                      <option value="nao_sei">Não tenho certeza</option>
                    </select>
                  </div>

                  <button className="w-full bg-accent-500 hover:bg-accent-600 text-brand-900 font-bold text-lg py-4 rounded-xl transition-all transform hover:-translate-y-1 shadow-lg shadow-accent-500/30 flex items-center justify-center gap-2">
                    Receber Minha Cotação Grátis
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1 mt-4">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Seus dados estão seguros conosco.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Rodapé (Footer) */}
      <footer className="bg-gray-900 text-gray-300 pt-20 pb-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center text-white">
                  <Droplet className="w-6 h-6" />
                </div>
                <span className="font-display font-bold text-2xl text-white tracking-tight">Aqua<span className="text-brand-500">Clear</span></span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Especialistas em transformar sua piscina no melhor lugar da casa. Qualidade, pontualidade e transparência em cada gota.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navegação Rápida</h4>
              <ul className="space-y-3">
                <li><a href="#sobre" className="hover:text-brand-500 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Sobre Nós</a></li>
                <li><a href="#servicos" className="hover:text-brand-500 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Nossos Serviços</a></li>
                <li><a href="#como-funciona" className="hover:text-brand-500 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Como Funciona</a></li>
                <li><a href="#portfolio" className="hover:text-brand-500 transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Depoimentos</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Serviços</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-brand-500 transition-colors">Limpeza Semanal</a></li>
                <li><a href="#" className="hover:text-brand-500 transition-colors">Tratamento Químico</a></li>
                <li><a href="#" className="hover:text-brand-500 transition-colors">Recuperação de Água</a></li>
                <li><a href="#" className="hover:text-brand-500 transition-colors">Manutenção de Bombas</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-sm">Av. Paulista, 1000 - Bela Vista<br/>São Paulo - SP</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                  <span className="text-sm">(11) 99999-9999</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                  <span className="text-sm">contato@aquaclear.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} AquaClear Piscinas. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
