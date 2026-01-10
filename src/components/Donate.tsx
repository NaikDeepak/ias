import { motion } from 'framer-motion';
import { Buildings, Gift, Stamp } from '@phosphor-icons/react';
import { QRCodeCanvas } from 'qrcode.react';

// Decoded UPI String from the official IAS QR Code
const UPI_STRING = "000201010211021646049010380490610415512260003804905061661000200380490720826UTIB000314492001003204452026460010A0000005240128MAB.037322031440157@AXISBANK27490010A000000524013103732203144015761000200380490725204839853033565802IN5921INDO ATHLETIC SOCIETY6004PUNE610641104462120708038049076304FDAF";

const Donate = () => {
    return (
        <section className="py-24 relative z-10 bg-neutral-900/30">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 mb-6 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                            <Stamp weight="fill" className="text-green-500" />
                            <span>80G & 12A Certified NGO</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-white/90">
                            Health. Environment. <br />
                            <span className="text-orange-400">Happiness.</span>
                        </h2>
                        <div className="text-lg text-neutral-400 leading-relaxed mb-8 space-y-4">
                            <p>
                                Indo Athletic Society (IAS) is a <strong className="text-white">Socio-Environmental non-profit</strong> formed to foster awareness about our Health and Environment through the games we play.
                            </p>
                            <p>
                                We are proud to announce that we are now <strong className="text-white">80G & 12A Certified</strong> by the Income Tax Department of India. Your contributions are now eligible for tax exemption, and we are officially open for <strong className="text-white">Corporate Social Responsibility (CSR)</strong> activities.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                <div className="p-3 rounded-full bg-orange-500/20 text-orange-400">
                                    <Gift size={24} weight="duotone" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">80G Tax Exemption</h4>
                                    <p className="text-sm text-neutral-400">Donations made to IAS are eligible for exemption under section 80G of the Income Tax Act.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                <div className="p-3 rounded-full bg-teal-500/20 text-teal-400">
                                    <Buildings size={24} weight="duotone" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">CSR Ready</h4>
                                    <p className="text-sm text-neutral-400">We invite corporates to partner with us for impactful Social & Environmental initiatives.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-10 rounded-3xl bg-neutral-800/50 border border-white/10 backdrop-blur-xl relative overflow-hidden flex flex-col items-center text-center"
                    >
                        {/* Decorative Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />

                        <h3 className="text-2xl font-bold mb-2">Scan to Donate</h3>
                        <p className="text-neutral-400 text-sm mb-6">Use any UPI app to support our mission.</p>

                        <div className="p-4 bg-white rounded-2xl shadow-xl max-w-[280px] relative overflow-hidden group">
                            {/* Clean white container for QR */}
                            <QRCodeCanvas
                                value={UPI_STRING}
                                size={220}
                                bgColor={"#ffffff"}
                                fgColor={"#000000"}
                                level={"Q"}
                                includeMargin={false}
                                className="rounded"
                            />
                        </div>

                        <div className="mt-8 space-y-1 text-sm text-neutral-500">
                            <p className="font-mono">MID: 037322031440157</p>
                            <p className="font-mono">TID: 32574861</p>
                        </div>
                        <p className="text-xs text-neutral-600 mt-4 max-w-xs">
                            80G Certificate Available upon request.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Donate;
