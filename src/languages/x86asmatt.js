/*
Language: Intel x86 Assembly (GNU assembler, AT&T style)
Author: K. Gondow <gondow@cs.titech.ac.jp>
Description: x86 assembly syntax (GNU assembler, AT&T style)
Website: https://github.com/gondow/highlightjs-x86asmatt/tree/main
Category: assembler
*/

const x86_opcodes = "\
aaa \
aad \
aadd \
aam \
aand \
aas \
adc \
adcb \
adcw \
adcl \
adcq \
adcx \
add \
addb \
addw \
addl \
addq \
addpd \
addps \
addr16 \
addr32 \
addsd \
addss \
addsubpd \
addsubps \
adox \
adword \
aesdec \
aesdec128kl \
aesdec256kl \
aesdeclast \
aesdecwide128kl \
aesdecwide256kl \
aesenc \
aesenc128kl \
aesenc256kl \
aesenclast \
aesencwide128kl \
aesencwide256kl \
aesimc \
aeskeygenassist \
and \
andb \
andw \
andl \
andq \
andn \
andnpd \
andnps \
andpd \
andps \
aor \
arpl \
aword \
axor \
bextr \
blcfill \
blci \
blcic \
blcmsk \
blcs \
blendpd \
blendps \
blendvpd \
blendvps \
blsfill \
blsi \
blsic \
blsmsk \
blsr \
bnd \
bndcl \
bndcn \
bndcu \
bndldx \
bndmk \
bndmov \
bndstx \
bound \
bsf \
bsr \
bswap \
bt \
btc \
btr \
bts \
bzhi \
call \
callq \
cbtw \
cbw \
cdq \
cdqe \
clac \
clc \
cld \
cldemote \
clflush \
clflushopt \
clgi \
cli \
clr \
clrssbsy \
cltd \
cltq \
clts \
clui \
clwb \
clzero \
cmc \
cmova \
cmovae \
cmovb \
cmovbe \
cmovc \
cmovcxz \
cmove \
cmovecxz \
cmovg \
cmovge \
cmovl \
cmovle \
cmovna \
cmovnae \
cmovnb \
cmovnbe \
cmovnc \
cmovne \
cmovng \
cmovnge \
cmovnl \
cmovnle \
cmovno \
cmovnp \
cmovns \
cmovnz \
cmovo \
cmovp \
cmovpe \
cmovpo \
cmovs \
cmovz \
cmp \
cmpb \
cmpw \
cmpl \
cmpq \
cmpaexadd \
cmpaxadd \
cmpbexadd \
cmpbxadd \
cmpcxadd \
cmpcxzxadd \
cmpecxzxadd \
cmpeqpd \
cmpeqps \
cmpeqsd \
cmpeqss \
cmpexadd \
cmpgexadd \
cmpgxadd \
cmplepd \
cmpleps \
cmplesd \
cmpless \
cmplexadd \
cmpltpd \
cmpltps \
cmpltsd \
cmpltss \
cmplxadd \
cmpnaexadd \
cmpnaxadd \
cmpnbexadd \
cmpnbxadd \
cmpncxadd \
cmpneqpd \
cmpneqps \
cmpneqsd \
cmpneqss \
cmpnexadd \
cmpngexadd \
cmpngxadd \
cmpnlepd \
cmpnleps \
cmpnlesd \
cmpnless \
cmpnlexadd \
cmpnltpd \
cmpnltps \
cmpnltsd \
cmpnltss \
cmpnlxadd \
cmpnoxadd \
cmpnpxadd \
cmpnsxadd \
cmpnzxadd \
cmpordpd \
cmpordps \
cmpordsd \
cmpordss \
cmpoxadd \
cmppd \
cmppexadd \
cmppoxadd \
cmpps \
cmppxadd \
cmps \
cmpsd \
cmpss \
cmpsxadd \
cmpunordpd \
cmpunordps \
cmpunordsd \
cmpunordss \
cmpxchg \
cmpxchgb \
cmpxchgw \
cmpxchgl \
cmpxchgq \
cmpxchg16b \
cmpxchg8b \
cmpzxadd \
comisd \
comiss \
cpuid \
cqo \
cqto \
crc32 \
cs \
cvtdq2pd \
cvtdq2ps \
cvtpd2dq \
cvtpd2pi \
cvtpd2ps \
cvtpi2pd \
cvtpi2ps \
cvtps2dq \
cvtps2pd \
cvtps2pi \
cvtsd2si \
cvtsd2ss \
cvtsi2sd \
cvtsi2ss \
cvtss2sd \
cvtss2si \
cvttpd2dq \
cvttpd2pi \
cvttps2dq \
cvttps2pi \
cvttsd2si \
cvttss2si \
cwd \
cwde \
cwtd \
cwtl \
daa \
das \
data16 \
data32 \
dec \
decb \
decw \
decl \
decq \
div \
divb \
divw \
divl \
divq \
divpd \
divps \
divsd \
divss \
dppd \
dpps \
ds \
dword \
emms \
encls \
enclu \
enclv \
encodekey128 \
encodekey256 \
endbr32 \
endbr64 \
enqcmd \
enqcmds \
enter \
erets \
eretu \
es \
extractps \
extrq \
f2xm1 \
fabs \
fadd \
faddp \
fbld \
fbstp \
fchs \
fclex \
fcmova \
fcmovae \
fcmovb \
fcmovbe \
fcmove \
fcmovna \
fcmovnae \
fcmovnb \
fcmovnbe \
fcmovne \
fcmovnu \
fcmovu \
fcom \
fcomi \
fcomip \
fcomp \
fcompi \
fcompp \
fcos \
fdecstp \
fdisi \
fdiv \
fdivp \
fdivr \
fdivrp \
femms \
feni \
ffree \
ffreep \
fiadd \
ficom \
ficomp \
fidiv \
fidivr \
fild \
fildll \
fimul \
fincstp \
finit \
fist \
fistp \
fistpll \
fisttp \
fisttpll \
fisub \
fisubr \
fld \
fld1 \
fldcw \
fldenv \
fldl2e \
fldl2t \
fldlg2 \
fldln2 \
fldpi \
fldt \
fldz \
fmul \
fmulp \
fnclex \
fndisi \
fneni \
fninit \
fnop \
fnsave \
fnsetpm \
fnstcw \
fnstenv \
fnstsw \
fpatan \
fprem \
fprem1 \
fptan \
frndint \
frstor \
frstpm \
fs \
fsave \
fscale \
fsetpm \
fsin \
fsincos \
fsqrt \
fst \
fstcw \
fstenv \
fstp \
fstpt \
fstsw \
fsub \
fsubp \
fsubr \
fsubrp \
ftst \
fucom \
fucomi \
fucomip \
fucomp \
fucompi \
fucompp \
fwait \
fxam \
fxch \
fxrstor \
fxrstor64 \
fxsave \
fxsave64 \
fxtract \
fyl2x \
fyl2xp1 \
getsec \
gf2p8affineinvqb \
gf2p8affineqb \
gf2p8mulb \
gs \
haddpd \
haddps \
hlt \
hnt \
hreset \
hsubpd \
hsubps \
ht \
idiv \
idivb \
idivw \
idivl \
idivq \
imul \
imulb \
imulw \
imull \
imulq \
in \
inb \
inw \
inl \
inc \
incb \
incw \
incl \
incq \
incsspd \
incsspq \
ins \
insertps \
insertq \
int \
int1 \
int3 \
into \
invd \
invept \
invlpg \
invlpga \
invlpgb \
invpcid \
invvpid \
iret \
ja \
jae \
jb \
jbe \
jc \
jcxz \
je \
jecxz \
jg \
jge \
jl \
jle \
jmp \
jna \
jnae \
jnb \
jnbe \
jnc \
jne \
jng \
jnge \
jnl \
jnle \
jno \
jnp \
jns \
jnz \
jo \
jp \
jpe \
jpo \
jrcxz \
js \
jz \
kaddb \
kaddd \
kaddq \
kaddw \
kandb \
kandd \
kandnb \
kandnd \
kandnq \
kandnw \
kandq \
kandw \
kmovb \
kmovq \
kmovw \
knotb \
knotd \
knotq \
knotw \
korb \
kord \
korq \
kortestb \
kortestd \
kortestq \
kortestw \
korw \
kshiftlb \
kshiftld \
kshiftlq \
kshiftlw \
kshiftrb \
kshiftrd \
kshiftrq \
kshiftrw \
ktestb \
ktestd \
ktestq \
ktestw \
kunpckbw \
kunpckdq \
kunpckwd \
kxnorb \
kxnord \
kxnorq \
kxnorw \
kxorb \
kxord \
kxorq \
kxorw \
lahf \
lar \
lcall \
lddqu \
ldmxcsr \
lds \
ldtilecfg \
lea \
// leab \
leaw \
leal \
leaq \
leave \
les \
lfence \
lfs \
lgdt \
lgs \
lidt \
ljmp \
lkgs \
lldt \
llwpcb \
lmsw \
loadiwkey \
lock \
lods \
loop \
loope \
loopne \
loopnz \
loopz \
lret \
lsl \
lss \
ltr \
lwpins \
lwpval \
lzcnt \
maskmovdqu \
maskmovq \
maxpd \
maxps \
maxsd \
maxss \
mcommit \
mfence \
minpd \
minps \
minsd \
minss \
monitor \
monitorx \
montmul \
mov \
movb \
movw \
movl \
movq \
movabs \
movapd \
movaps \
movbe \
movd \
movddup \
movdir64b \
movdiri \
movdq2q \
movdqa \
movdqu \
movhlps \
movhpd \
movhps \
movlhps \
movlpd \
movlps \
movmskpd \
movmskps \
movntdq \
movntdqa \
movnti \
movntpd \
movntps \
movntq \
movntsd \
movntss \
movq \
movq2dq \
movs \
movsb \
movsbl \
movsbq \
movsbw \
movsd \
movshdup \
movsl \
movsldup \
movslq \
movss \
movsw \
movswl \
movswq \
movsx \
movsxd \
movupd \
movups \
movzb \
movzbl \
movzbq \
movzbw \
movzw \
movzwl \
movzwq \
movzx \
mpsadbw \
mul \
mulb \
mulw \
mull \
mulq \
mulpd \
mulps \
mulsd \
mulss \
mulx \
mwait \
mwaitx \
neg \
negb \
negw \
negl \
negq \
nop \
nopb \
nopw \
nopl \
nopq \
not \
notb \
notw \
notl \
notq \
notrack \
or \
orb \
orw \
orl \
orq \
orpd \
orps \
out \
outb \
outw \
outl \
outs \
pabsb \
pabsd \
pabsw \
packssdw \
packsswb \
packusdw \
packuswb \
paddb \
paddd \
paddq \
paddsb \
paddsw \
paddusb \
paddusw \
paddw \
palignr \
pand \
pandn \
pause \
pavgb \
pavgusb \
pavgw \
pblendvb \
pblendw \
pclmulhqhqdq \
pclmulhqlqdq \
pclmullqhqdq \
pclmullqlqdq \
pclmulqdq \
pcmpeqb \
pcmpeqd \
pcmpeqq \
pcmpeqw \
pcmpestri \
pcmpestrm \
pcmpgtb \
pcmpgtd \
pcmpgtq \
pcmpgtw \
pcmpistri \
pcmpistrm \
pconfig \
pdep \
pext \
pextrb \
pextrd \
pextrq \
pextrw \
pf2id \
pf2iw \
pfacc \
pfadd \
pfcmpeq \
pfcmpge \
pfcmpgt \
pfmax \
pfmin \
pfmul \
pfnacc \
pfpnacc \
pfrcp \
pfrcpit1 \
pfrcpit2 \
pfrsqit1 \
pfrsqrt \
pfsub \
pfsubr \
phaddd \
phaddsw \
phaddw \
phminposuw \
phsubd \
phsubsw \
phsubw \
pi2fd \
pi2fw \
pinsrb \
pinsrd \
pinsrq \
pinsrw \
pmaddubsw \
pmaddwd \
pmaxsb \
pmaxsd \
pmaxsw \
pmaxub \
pmaxud \
pmaxuw \
pminsb \
pminsd \
pminsw \
pminub \
pminud \
pminuw \
pmovmskb \
pmovsxbd \
pmovsxbq \
pmovsxbw \
pmovsxdq \
pmovsxwd \
pmovsxwq \
pmovzxbd \
pmovzxbq \
pmovzxbw \
pmovzxdq \
pmovzxwd \
pmovzxwq \
pmuldq \
pmulhrsw \
pmulhrw \
pmulhuw \
pmulhw \
pmulld \
pmullw \
pmuludq \
pop \
popb \
popw \
popl \
popq \
popa \
popcnt \
popf \
por \
prefetch \
prefetchit0 \
prefetchit1 \
prefetchnta \
prefetcht0 \
prefetcht1 \
prefetcht2 \
prefetchw \
prefetchwt1 \
psadbw \
pshufb \
pshufd \
pshufhw \
pshuflw \
pshufw \
psignb \
psignd \
psignw \
pslld \
pslldq \
psllq \
psllw \
psmash \
psrad \
psraw \
psrld \
psrldq \
psrlq \
psrlw \
psubb \
psubd \
psubq \
psubsb \
psubsw \
psubusb \
psubusw \
psubw \
pswapd \
ptest \
ptwrite \
punpckhbw \
punpckhdq \
punpckhqdq \
punpckhwd \
punpcklbw \
punpckldq \
punpcklqdq \
punpcklwd \
push \
pushb \
pushw \
pushl \
pushq \
pusha \
pushf \
pvalidate \
pxor \
rcl \
rclb \
rclw \
rcll \
rclq \
rcpps \
rcpss \
rcr \
rcrb \
rcrw \
rcrl \
rcrq \
rdfsbase \
rdgsbase \
rdmsr \
rdmsrlist \
rdpid \
rdpkru \
rdpmc \
rdpru \
rdrand \
rdseed \
rdsspd \
rdsspq \
rdtsc \
rdtscp \
rep \
repe \
repne \
repnz \
repz \
ret \
retq \
retf \
rex \
rex.b \
rex.r \
rex.rb \
rex.rx \
rex.rxb \
rex.w \
rex.wb \
rex.wr \
rex.wrb \
rex.wrx \
rex.wrxb \
rex.wx \
rex.wxb \
rex.x \
rex.xb \
rex64 \
rex64x \
rex64xy \
rex64xyz \
rex64xz \
rex64y \
rex64yz \
rex64z \
rexx \
rexxy \
rexxyz \
rexxz \
rexy \
rexyz \
rexz \
rmpadjust \
rmpquery \
rmpupdate \
rol \
rolb \
rolw \
roll \
rolq \
ror \
rorb \
rorw \
rorl \
rorq \
rorx \
roundpd \
roundps \
roundsd \
roundss \
rsm \
rsqrtps \
rsqrtss \
rstorssp \
sahf \
sal \
salb \
salw \
sall \
salq \
sar \
sarb \
sarw \
sarl \
sarq \
sarx \
saveprevssp \
sbb \
sbbb \
sbbw \
sbbl \
sbbq \
scas \
scmp \
seamcall \
seamops \
seamret \
senduipi \
serialize \
seta \
setae \
setb \
setbe \
setc \
setcxz \
sete \
setecxz \
setg \
setge \
setl \
setle \
setna \
setnae \
setnb \
setnbe \
setnc \
setne \
setng \
setnge \
setnl \
setnle \
setno \
setnp \
setns \
setnz \
seto \
setp \
setpe \
setpo \
sets \
setssbsy \
setz \
sfence \
sgdt \
sha1msg1 \
sha1msg2 \
sha1nexte \
sha1rnds4 \
sha256msg1 \
sha256msg2 \
sha256rnds2 \
shl \
shlb \
shlw \
shll \
shlq \
shld \
shlx \
shr \
shrb \
shrw \
shrl \
shrq \
shrd \
shrx \
shufpd \
shufps \
sidt \
skinit \
sldt \
slod \
slwpcb \
smov \
smsw \
sqrtpd \
sqrtps \
sqrtsd \
sqrtss \
ss \
ssca \
ssto \
stac \
stc \
std \
stgi \
sti \
stmxcsr \
stos \
str \
sttilecfg \
stui \
sub \
subb \
subw \
subl \
subq \
subpd \
subps \
subsd \
subss \
swapgs \
syscall \
sysenter \
sysexit \
sysret \
t1mskc \
tcmmimfp16ps \
tcmmrlfp16ps \
tdcall \
tdpbf16ps \
tdpbssd \
tdpbsud \
tdpbusd \
tdpbuud \
tdpfp16ps \
test \
testb \
testw \
testl \
testq \
testui \
tileloadd \
tileloaddt1 \
tilerelease \
tilestored \
tilezero \
tlbsync \
tpause \
tzcnt \
tzmsk \
ucomisd \
ucomiss \
ud0 \
ud1 \
ud2 \
ud2a \
ud2b \
uiret \
umonitor \
umwait \
unpckhpd \
unpckhps \
unpcklpd \
unpcklps \
v4fmaddps \
v4fmaddss \
v4fnmaddps \
v4fnmaddss \
vaddpd \
vaddph \
vaddps \
vaddsd \
vaddsh \
vaddss \
vaddsubpd \
vaddsubps \
vaesdec \
vaesdeclast \
vaesenc \
vaesenclast \
vaesimc \
vaeskeygenassist \
valignd \
valignq \
vandnpd \
vandnps \
vandpd \
vandps \
vbcstnebf162ps \
vbcstnesh2ps \
vblendmpd \
vblendmps \
vblendpd \
vblendps \
vblendvpd \
vblendvps \
vbroadcastf128 \
vbroadcastf32x2 \
vbroadcastf32x4 \
vbroadcastf32x8 \
vbroadcastf64x2 \
vbroadcastf64x4 \
vbroadcasti128 \
vbroadcasti32x2 \
vbroadcasti32x4 \
vbroadcasti32x8 \
vbroadcasti64x2 \
vbroadcasti64x4 \
vbroadcastsd \
vbroadcastss \
vcmpeqpd \
vcmpeqph \
vcmpeqps \
vcmpeqsd \
vcmpeqsh \
vcmpeqss \
vcmplepd \
vcmpleph \
vcmpleps \
vcmplesd \
vcmplesh \
vcmpless \
vcmpltpd \
vcmpltph \
vcmpltps \
vcmpltsd \
vcmpltsh \
vcmpltss \
vcmpneqpd \
vcmpneqph \
vcmpneqps \
vcmpneqsd \
vcmpneqsh \
vcmpneqss \
vcmpnlepd \
vcmpnleph \
vcmpnleps \
vcmpnlesd \
vcmpnlesh \
vcmpnless \
vcmpnltpd \
vcmpnltph \
vcmpnltps \
vcmpnltsd \
vcmpnltsh \
vcmpnltss \
vcmpordpd \
vcmpordph \
vcmpordps \
vcmpordsd \
vcmpordsh \
vcmpordss \
vcmppd \
vcmpph \
vcmpps \
vcmpsd \
vcmpsh \
vcmpss \
vcmpunordpd \
vcmpunordph \
vcmpunordps \
vcmpunordsd \
vcmpunordsh \
vcmpunordss \
vcomisd \
vcomish \
vcomiss \
vcompresspd \
vcompressps \
vcvtdq2pd \
vcvtdq2ph \
vcvtdq2phx \
vcvtdq2phy \
vcvtdq2ps \
vcvtne2ps2bf16 \
vcvtneebf162ps \
vcvtneeph2ps \
vcvtneobf162ps \
vcvtneoph2ps \
vcvtneps2bf16 \
vcvtneps2bf16x \
vcvtneps2bf16y \
vcvtpd2dq \
vcvtpd2dqx \
vcvtpd2dqy \
vcvtpd2phx \
vcvtpd2phy \
vcvtpd2phz \
vcvtpd2ps \
vcvtpd2psx \
vcvtpd2psy \
vcvtpd2qq \
vcvtpd2udq \
vcvtpd2udqx \
vcvtpd2udqy \
vcvtpd2uqq \
vcvtph2dq \
vcvtph2pd \
vcvtph2ps \
vcvtph2psx \
vcvtph2qq \
vcvtph2udq \
vcvtph2uqq \
vcvtph2uw \
vcvtph2w \
vcvtps2dq \
vcvtps2pd \
vcvtps2ph \
vcvtps2phx \
vcvtps2phxx \
vcvtps2phxy \
vcvtps2qq \
vcvtps2udq \
vcvtps2uqq \
vcvtqq2pd \
vcvtqq2phx \
vcvtqq2phy \
vcvtqq2phz \
vcvtqq2ps \
vcvtqq2psx \
vcvtqq2psy \
vcvtsd2sh \
vcvtsd2si \
vcvtsd2ss \
vcvtsd2usi \
vcvtsh2sd \
vcvtsh2si \
vcvtsh2ss \
vcvtsh2usi \
vcvtsi2sd \
vcvtsi2sh \
vcvtsi2ss \
vcvtss2sd \
vcvtss2sh \
vcvtss2si \
vcvtss2usi \
vcvttpd2dq \
vcvttpd2dqx \
vcvttpd2dqy \
vcvttpd2qq \
vcvttpd2udq \
vcvttpd2udqx \
vcvttpd2udqy \
vcvttpd2uqq \
vcvttph2dq \
vcvttph2qq \
vcvttph2udq \
vcvttph2uqq \
vcvttph2uw \
vcvttph2w \
vcvttps2dq \
vcvttps2qq \
vcvttps2udq \
vcvttps2uqq \
vcvttsd2si \
vcvttsd2usi \
vcvttsh2si \
vcvttsh2usi \
vcvttss2si \
vcvttss2usi \
vcvtudq2pd \
vcvtudq2ph \
vcvtudq2phx \
vcvtudq2phy \
vcvtudq2ps \
vcvtuqq2pd \
vcvtuqq2phx \
vcvtuqq2phy \
vcvtuqq2phz \
vcvtuqq2ps \
vcvtuqq2psx \
vcvtuqq2psy \
vcvtusi2sd \
vcvtusi2sh \
vcvtusi2ss \
vcvtuw2ph \
vcvtw2ph \
vdbpsadbw \
vdivpd \
vdivph \
vdivps \
vdivsd \
vdivsh \
vdivss \
vdpbf16ps \
vdppd \
vdpps \
verr \
verw \
vexp2pd \
vexp2ps \
vexpandpd \
vexpandps \
vextractf128 \
vextractf32x4 \
vextractf32x8 \
vextractf64x2 \
vextractf64x4 \
vextracti128 \
vextracti32x4 \
vextracti32x8 \
vextracti64x2 \
vextracti64x4 \
vextractps \
vfcmaddcph \
vfcmaddcsh \
vfcmulcph \
vfcmulcsh \
vfixupimmpd \
vfixupimmps \
vfixupimmsd \
vfixupimmss \
vfmadd132pd \
vfmadd132ps \
vfmadd132sd \
vfmadd132sh \
vfmadd132ss \
vfmadd213pd \
vfmadd213ph \
vfmadd213ps \
vfmadd213sd \
vfmadd213sh \
vfmadd213ss \
vfmadd231pd \
vfmadd231ph \
vfmadd231ps \
vfmadd231sd \
vfmadd231sh \
vfmadd231ss \
vfmaddcph \
vfmaddcsh \
vfmaddpd \
vfmaddps \
vfmaddsd \
vfmaddss \
vfmaddsub132pd \
vfmaddsub132ph \
vfmaddsub132ps \
vfmaddsub213pd \
vfmaddsub213ph \
vfmaddsub213ps \
vfmaddsub231pd \
vfmaddsub231ph \
vfmaddsub231ps \
vfmaddsubpd \
vfmaddsubps \
vfmsub132pd \
vfmsub132ph \
vfmsub132ps \
vfmsub132sd \
vfmsub132sh \
vfmsub132ss \
vfmsub213pd \
vfmsub213ph \
vfmsub213ps \
vfmsub213sd \
vfmsub213sh \
vfmsub213ss \
vfmsub231pd \
vfmsub231ph \
vfmsub231ps \
vfmsub231sd \
vfmsub231sh \
vfmsub231ss \
vfmsubadd132pd \
vfmsubadd132ph \
vfmsubadd132ps \
vfmsubadd213pd \
vfmsubadd213ph \
vfmsubadd213ps \
vfmsubadd231pd \
vfmsubadd231ph \
vfmsubadd231ps \
vfmsubaddpd \
vfmsubaddps \
vfmsubpd \
vfmsubps \
vfmsubsd \
vfmsubss \
vfmulcph \
vfmulcsh \
vfnmadd132pd \
vfnmadd132ph \
vfnmadd132ps \
vfnmadd132sd \
vfnmadd132sh \
vfnmadd132ss \
vfnmadd213pd \
vfnmadd213ph \
vfnmadd213ps \
vfnmadd213sd \
vfnmadd213sh \
vfnmadd213ss \
vfnmadd231pd \
vfnmadd231ph \
vfnmadd231ps \
vfnmadd231sd \
vfnmadd231sh \
vfnmadd231ss \
vfnmaddpd \
vfnmaddps \
vfnmaddsd \
vfnmaddss \
vfnmsub132pd \
vfnmsub132ph \
vfnmsub132ps \
vfnmsub132sd \
vfnmsub132sh \
vfnmsub132ss \
vfnmsub213pd \
vfnmsub213ph \
vfnmsub213ps \
vfnmsub213sd \
vfnmsub213sh \
vfnmsub213ss \
vfnmsub231pd \
vfnmsub231ph \
vfnmsub231ps \
vfnmsub231sd \
vfnmsub231sh \
vfnmsub231ss \
vfnmsubpd \
vfnmsubps \
vfnmsubsd \
vfnmsubss \
vfpclasspd \
vfpclasspdx \
vfpclasspdy \
vfpclasspdz \
vfpclassphx \
vfpclassphy \
vfpclassphz \
vfpclassps \
vfpclasspsx \
vfpclasspsy \
vfpclasspsz \
vfpclasssd \
vfpclasssh \
vfpclassss \
vfrczpd \
vfrczps \
vfrczsd \
vfrczss \
vgatherdpd \
vgatherdps \
vgatherpf0dpd \
vgatherpf0dps \
vgatherpf0qpd \
vgatherpf0qps \
vgatherpf1dpd \
vgatherpf1dps \
vgatherpf1qpd \
vgatherpf1qps \
vgatherqpd \
vgatherqps \
vgetexppd \
vgetexpph \
vgetexpps \
vgetexpsd \
vgetexpsh \
vgetexpss \
vgetmantpd \
vgetmantph \
vgetmantps \
vgetmantsd \
vgetmantsh \
vgetmantss \
vgf2p8affineinvqb \
vgf2p8affineqb \
vgf2p8mulb \
vhaddpd \
vhaddps \
vhsubpd \
vhsubps \
vinsertf128 \
vinsertf32x4 \
vinsertf32x8 \
vinsertf64x2 \
vinsertf64x4 \
vinserti128 \
vinserti32x4 \
vinserti32x8 \
vinserti64x2 \
vinserti64x4 \
vinsertps \
vlddqu \
vldmxcsr \
vmaskmovdqu \
vmaskmovpd \
vmaskmovps \
vmaxpd \
vmaxph \
vmaxps \
vmaxsd \
vmaxsh \
vmaxss \
vmcall \
vmclear \
vmfunc \
vmgexit \
vminpd \
vminph \
vminps \
vminsd \
vminsh \
vminss \
vmlaunch \
vmload \
vmmcall \
vmovapd \
vmovaps \
vmovd \
vmovddup \
vmovdqa \
vmovdqa32 \
vmovdqa64 \
vmovdqu \
vmovdqu16 \
vmovdqu32 \
vmovdqu64 \
vmovdqu8 \
vmovhlps \
vmovhpd \
vmovhps \
vmovlhps \
vmovlpd \
vmovlps \
vmovmskpd \
vmovmskps \
vmovntdq \
vmovntdqa \
vmovntpd \
vmovntps \
vmovq \
vmovsd \
vmovsh \
vmovshdup \
vmovsldup \
vmovss \
vmovupd \
vmovups \
vmovw \
vmpsadbw \
vmptrld \
vmptrst \
vmread \
vmresume \
vmrun \
vmsave \
vmulpd \
vmulph \
vmulps \
vmulsd \
vmulsh \
vmulss \
vmwrite \
vmxoff \
vmxon \
vorpd \
vorps \
vp2intersectd \
vp2intersectq \
vp4dpwssd \
vp4dpwssds \
vpabsb \
vpabsd \
vpabsq \
vpabsw \
vpackssdw \
vpacksswb \
vpackusdw \
vpackuswb \
vpaddb \
vpaddd \
vpaddq \
vpaddsb \
vpaddsw \
vpaddusb \
vpaddusw \
vpaddw \
vpalignr \
vpand \
vpandd \
vpandn \
vpandnd \
vpandnq \
vpandq \
vpavgb \
vpavgw \
vpblendd \
vpblendmb \
vpblendmd \
vpblendmq \
vpblendmw \
vpblendvb \
vpblendw \
vpbroadcastb \
vpbroadcastd \
vpbroadcastmb2q \
vpbroadcastmw2d \
vpbroadcastq \
vpbroadcastw \
vpclmulhqhqdq \
vpclmulhqlqdq \
vpclmullqhqdq \
vpclmullqlqdq \
vpclmulqdq \
vpcmov \
vpcmpb \
vpcmpd \
vpcmpeqb \
vpcmpeqd \
vpcmpeqq \
vpcmpequb \
vpcmpequd \
vpcmpequq \
vpcmpequw \
vpcmpeqw \
vpcmpestri \
vpcmpestrm \
vpcmpfalseb \
vpcmpfalsed \
vpcmpfalseq \
vpcmpfalseub \
vpcmpfalseud \
vpcmpfalseuq \
vpcmpfalseuw \
vpcmpfalsew \
vpcmpgeb \
vpcmpged \
vpcmpgeq \
vpcmpgeub \
vpcmpgeud \
vpcmpgeuq \
vpcmpgeuw \
vpcmpgew \
vpcmpgtb \
vpcmpgtd \
vpcmpgtq \
vpcmpgtub \
vpcmpgtud \
vpcmpgtuq \
vpcmpgtuw \
vpcmpgtw \
vpcmpistri \
vpcmpistrm \
vpcmpleb \
vpcmpled \
vpcmpleq \
vpcmpleub \
vpcmpleud \
vpcmpleuq \
vpcmpleuw \
vpcmplew \
vpcmpltb \
vpcmpltd \
vpcmpltq \
vpcmpltub \
vpcmpltud \
vpcmpltuq \
vpcmpltuw \
vpcmpltw \
vpcmpneqb \
vpcmpneqd \
vpcmpneqq \
vpcmpnequb \
vpcmpnequd \
vpcmpnequq \
vpcmpnequw \
vpcmpneqw \
vpcmpq \
vpcmptrueb \
vpcmptrued \
vpcmptrueq \
vpcmptrueub \
vpcmptrueud \
vpcmptrueuq \
vpcmptrueuw \
vpcmptruew \
vpcmpub \
vpcmpud \
vpcmpuq \
vpcmpuw \
vpcmpw \
vpcomb \
vpcomd \
vpcomeqb \
vpcomeqd \
vpcomeqq \
vpcomequb \
vpcomequd \
vpcomequq \
vpcomequw \
vpcomeqw \
vpcomfalseb \
vpcomfalsed \
vpcomfalseq \
vpcomfalseub \
vpcomfalseud \
vpcomfalseuq \
vpcomfalseuw \
vpcomfalsew \
vpcomgeb \
vpcomged \
vpcomgeq \
vpcomgeub \
vpcomgeud \
vpcomgeuq \
vpcomgeuw \
vpcomgew \
vpcomgtb \
vpcomgtd \
vpcomgtq \
vpcomgtub \
vpcomgtud \
vpcomgtuq \
vpcomgtuw \
vpcomgtw \
vpcomleb \
vpcomled \
vpcomleq \
vpcomleub \
vpcomleud \
vpcomleuq \
vpcomleuw \
vpcomlew \
vpcomltb \
vpcomltd \
vpcomltq \
vpcomltub \
vpcomltud \
vpcomltuq \
vpcomltuw \
vpcomltw \
vpcomneqb \
vpcomneqd \
vpcomneqq \
vpcomnequb \
vpcomnequd \
vpcomnequq \
vpcomnequw \
vpcomneqw \
vpcompressb \
vpcompressd \
vpcompressq \
vpcompressw \
vpcomq \
vpcomtrueb \
vpcomtrued \
vpcomtrueq \
vpcomtrueub \
vpcomtrueud \
vpcomtrueuq \
vpcomtrueuw \
vpcomtruew \
vpcomub \
vpcomud \
vpcomuq \
vpcomuw \
vpcomw \
vpconflictd \
vpconflictq \
vpdpbssd \
vpdpbssds \
vpdpbsud \
vpdpbsuds \
vpdpbusd \
vpdpbusds \
vpdpbuud \
vpdpbuuds \
vpdpwssd \
vpdpwssds \
vperm2f128 \
vperm2i128 \
vpermb \
vpermd \
vpermi2b \
vpermi2d \
vpermi2pd \
vpermi2ps \
vpermi2q \
vpermi2w \
vpermil2pd \
vpermil2ps \
vpermilpd \
vpermilps \
vpermpd \
vpermps \
vpermq \
vpermt2b \
vpermt2d \
vpermt2pd \
vpermt2ps \
vpermt2q \
vpermt2w \
vpermw \
vpexpandb \
vpexpandd \
vpexpandq \
vpexpandw \
vpextrb \
vpextrd \
vpextrq \
vpextrw \
vpgatherdd \
vpgatherdq \
vpgatherqd \
vpgatherqq \
vphaddbd \
vphaddbq \
vphaddbw \
vphaddd \
vphadddq \
vphaddsw \
vphaddubd \
vphaddubq \
vphaddubw \
vphaddudq \
vphadduwd \
vphadduwq \
vphaddw \
vphaddwd \
vphaddwq \
vphminposuw \
vphsubbw \
vphsubd \
vphsubdq \
vphsubsw \
vphsubw \
vphsubwd \
vpinsrb \
vpinsrd \
vpinsrq \
vpinsrw \
vplzcntd \
vplzcntq \
vpmacsdd \
vpmacsdqh \
vpmacsdql \
vpmacssdd \
vpmacssdqh \
vpmacssdql \
vpmacsswd \
vpmacssww \
vpmacswd \
vpmacsww \
vpmadcsswd \
vpmadcswd \
vpmadd52huq \
vpmadd52luq \
vpmaddubsw \
vpmaddwd \
vpmaskmovd \
vpmaskmovq \
vpmaxsb \
vpmaxsd \
vpmaxsq \
vpmaxsw \
vpmaxub \
vpmaxud \
vpmaxuq \
vpmaxuw \
vpminsb \
vpminsd \
vpminsq \
vpminsw \
vpminub \
vpminud \
vpminuq \
vpminuw \
vpmovb2m \
vpmovd2m \
vpmovdb \
vpmovdw \
vpmovm2b \
vpmovm2d \
vpmovm2q \
vpmovm2w \
vpmovmskb \
vpmovq2m \
vpmovqb \
vpmovqd \
vpmovqw \
vpmovsdb \
vpmovsdw \
vpmovsqb \
vpmovsqd \
vpmovsqw \
vpmovswb \
vpmovsxbd \
vpmovsxbq \
vpmovsxbw \
vpmovsxdq \
vpmovsxwd \
vpmovsxwq \
vpmovusdb \
vpmovusdw \
vpmovusqb \
vpmovusqd \
vpmovusqw \
vpmovuswb \
vpmovw2m \
vpmovwb \
vpmovzxbd \
vpmovzxbq \
vpmovzxbw \
vpmovzxdq \
vpmovzxwd \
vpmovzxwq \
vpmuldq \
vpmulhrsw \
vpmulhuw \
vpmulhw \
vpmulld \
vpmullq \
vpmullw \
vpmultishiftqb \
vpmuludq \
vpopcntb \
vpopcntd \
vpopcntq \
vpopcntw \
vpor \
vpord \
vporq \
vpperm \
vprold \
vprolq \
vprolvd \
vprolvq \
vprord \
vprorq \
vprorvd \
vprorvq \
vproto \
vprotp \
vprotx \
vpsadbw \
vpscatterdd \
vpscatterdq \
vpscatterqd \
vpscatterqq \
vpshao \
vpshap \
vpshax \
vpshldd \
vpshldq \
vpshldvd \
vpshldvq \
vpshldvw \
vpshldw \
vpshlo \
vpshlp \
vpshlx \
vpshrdd \
vpshrdq \
vpshrdvd \
vpshrdvq \
vpshrdvw \
vpshrdw \
vpshufb \
vpshufbitqmb \
vpshufd \
vpshufhw \
vpshuflw \
vpsignb \
vpsignd \
vpsignw \
vpslld \
vpslldq \
vpsllq \
vpsllvd \
vpsllvq \
vpsllvw \
vpsllw \
vpsrad \
vpsraq \
vpsravd \
vpsravq \
vpsravw \
vpsraw \
vpsrld \
vpsrldq \
vpsrlq \
vpsrlvd \
vpsrlvq \
vpsrlvw \
vpsrlw \
vpsubb \
vpsubd \
vpsubq \
vpsubsb \
vpsubsw \
vpsubusb \
vpsubusw \
vpsubw \
vpternlogd \
vpternlogq \
vptest \
vptestmb \
vptestmd \
vptestmq \
vptestmw \
vptestnmb \
vptestnmd \
vptestnmq \
vptestnmw \
vpunpckhbw \
vpunpckhdq \
vpunpckhqdq \
vpunpckhwd \
vpunpcklbw \
vpunpckldq \
vpunpcklqdq \
vpunpcklwd \
vpxor \
vpxord \
vpxorq \
vrangepd \
vrangeps \
vrangesd \
vrangess \
vrcp14pd \
vrcp14ps \
vrcp14sd \
vrcp14ss \
vrcp28pd \
vrcp28ps \
vrcp28sd \
vrcp28ss \
vrcpph \
vrcpps \
vrcpsh \
vrcpss \
vreducepd \
vreduceph \
vreduceps \
vreducesd \
vreducesh \
vreducess \
vrndscalepd \
vrndscaleph \
vrndscaleps \
vrndscalesd \
vrndscalesh \
vrndscaless \
vroundpd \
vroundps \
vroundsd \
vroundss \
vrsqrt14pd \
vrsqrt14ps \
vrsqrt14sd \
vrsqrt14ss \
vrsqrt28pd \
vrsqrt28ps \
vrsqrt28sd \
vrsqrt28ss \
vrsqrtph \
vrsqrtps \
vrsqrtsh \
vrsqrtss \
vscalefpd \
vscalefph \
vscalefps \
vscalefsd \
vscalefsh \
vscalefss \
vscatterdpd \
vscatterdps \
vscatterpf0dpd \
vscatterpf0dps \
vscatterpf0qpd \
vscatterpf0qps \
vscatterpf1dpd \
vscatterpf1dps \
vscatterpf1qpd \
vscatterpf1qps \
vscatterqpd \
vscatterqps \
vshuff32x4 \
vshuff64x2 \
vshufi32x4 \
vshufi64x2 \
vshufpd \
vshufps \
vsqrtpd \
vsqrtph \
vsqrtps \
vsqrtsd \
vsqrtsh \
vsqrtss \
vstmxcsr \
vsubpd \
vsubph \
vsubps \
vsubsd \
vsubsh \
vsubss \
vtestpd \
vtestps \
vucomisd \
vucomish \
vucomiss \
vunpckhpd \
vunpckhps \
vunpcklpd \
vunpcklps \
vxorpd \
vxorps \
vzeroall \
vzeroupper \
wait \
wbinvd \
wbnoinvd \
word \
wrfsbase \
wrgsbase \
wrmsr \
wrmsrlist \
wrmsrns \
wrpkru \
wrssd \
wrssq \
wrussd \
wrussq \
xabort \
xacquire \
xadd \
xbegin \
xchg \
xchgb \
xchgw \
xchgl \
xchgq \
xcrypt-cbc \
xcrypt-cfb \
xcrypt-ctr \
xcrypt-ecb \
xcrypt-ofb \
xcryptcbc \
xcryptcfb \
xcryptctr \
xcryptecb \
xcryptofb \
xend \
xgetbv \
xlat \
xor \
xorb \
xorw \
xorl \
xorq \
xorpd \
xorps \
xrelease \
xresldtrk \
xrstor \
xrstor64 \
xrstors \
xrstors64 \
xsave \
xsave64 \
xsavec \
xsavec64 \
xsaveopt \
xsaveopt64 \
xsaves \
xsaves64 \
xsetbv \
xsha1 \
xsha256 \
xstore \
xstore-rng \
xstorerng \
xsusldtrk \
xtest \
";

export default function (hljs) {

    return {
	name: 'Intel x86 Assembly (GNU assembler, AT&T style)',
	case_insensitive: true,
	disableAutodetect: true,
	keywords: {
	    // $pattern: '[.%@]?' + hljs.IDENT_RE,
	    keyword: x86_opcodes // opcodes
	},
	contains: [
	    hljs.COMMENT('#', '$', {}),
	    { // labels, symbols, green
		className: 'string',
		illegal: /"/,
		variants: [
/*
		    { // simple symbols
			match: "[_a-zA-Z][_a-zA-Z0-9]+"
		    },
*/
		    { // numeric labels
			match: "\\s[0-9]+[fb:]\\s"
		    },
		    { // normal labels
			match: "\\b[_a-zA-Z][_a-zA-Z0-9]+[:]"
		    },
		]
	    },
	    { // literals, red
		className: "name",
		variants: [
		    { begin: '"', end: '"',
		      contains: [ hljs.BACKSLASH_ESCAPE ]
		    },
		    { begin: "'", end: "'",
		      contains: [ hljs.BACKSLASH_ESCAPE ]
		    },
		    { match: "\\s[+-]?0[bB][01]+"},
		    { match: "\\s[+-]?0[xX]?[0-9a-fA-F]+"},
		    { begin: "\\$[+-]?[0-9][bBxX]?[0-9a-fA-F]*"},
		    { match: "\\s[+-]?[0-9]+"},
		    { match: "@function"},
		]
	    },
	    { // registers, blue
		className: "title",
		match: "%[a-zA-Z]+"
	    },
	    { // assembler directives, orange
		className: "built_in",
		match : "\\.[a-zA-Z][a-zA-Z_0-9]*\\b"
	    },
	]
    };
}
