// let str = 'Aa999+/';
// let match = str.match(/[^A-Za-z0-9\+\/]/g);
// console.log(match);
/*
\w 匹配字母
\W 匹配非英语字母
\d 匹配数字
\D 匹配非数字
\s 匹配空白字符
\S 匹配非空白字符
\b 匹配单词边界 : 就是字符和特殊符号的边界，不匹配实际的字符
\B 匹配非单词边界
\0 匹配Nul字符
\n 匹配换行符
\f 匹配换页符
\r 匹配回车符
\t 匹配制表符
\v 匹配垂直制表符

描述字符范围：

[abc] 匹配方括号内任意字符
[^abc] 匹配不在方括号内的字符
[0-9] 匹配0-9
[a-z] 匹配小写a-z
[A-Za-z], [A-z] 匹配英语大小写字符
[A~D] 仅匹配A和D

重复匹配：
n+ 匹配任何至少一个包含n的字符串
n* 匹配
*/
//  匹配单词边界
// let str1 = '((!!!111AASDSDSJDSZAZACDSCKODCJDONULL-1';
// let a = str1.replace(/[A~D]/g, '-----');
// console.log(a); //  ((!!!-----111AASDSDSJDSZAZACDSCKODCJDO-----
// let str = "isayangyimihx";


// 126345
let str = `<td height="220" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
<tbody><tr> 
<td width="99%" height="30" align="center" style="padding-top:5px"><h1>终是无缘一别两欢</h1></td>
</tr>
<tr> 
<td height="25" align="center" class="author"> 
作者：<a href="/member/index.php?uid=%C1%F8%CC%EC%C7%D9">柳天琴</a> 
来源：文章阅读网 时间：2020-04-10 14:49 阅读：<script type="text/javascript" src="http://www.duwenzhang.com/plus/count.php?view=yes&amp;aid=414155&amp;mid=299757"></script>
<script type="text/javascript" src="/ziti.js"></script><script type="text/javascript">function doNewsContentLabel(size){var wenzhangziti=document.all?document.all['wenzhangziti']:document.getElementById('wenzhangziti');wenzhangziti.style.fontSize=size+'px';}
</script>
字体大小:
[<a href="javascript:doNewsContentLabel(14)">小</a>]
[<a href="javascript:doNewsContentLabel(16)">中</a>]
[<a href="javascript:doNewsContentLabel(18)">大</a>]
</td> </tr> <tr> <td valign="top" height="200"><table border="0" width="100%" cellpadding="0" style="margin-top:8px" cellspacing="0"><tbody><tr> <td rowspan="2" width="6" height="52"></td><td class="article "><div class="gga" id="gad1"><script src="/a9d9.js" type="text/javascript"></script></div><div id="wenzhangziti" class="article 414155"><p>　　昨天看了我初中<a href="http://www.duwenzhang.com/huati/xihuan/index1.html">喜欢</a>的人在空间发的一篇关于<a href="http://www.duwenzhang.com/huati/huaijiu/index1.html">怀念</a>初中的短篇小说吧，记录了他对一些记忆深刻的人的评价，而我也看到了我明明一直清楚，却不肯打心底接受的真相，他喜欢另外一个人，过往那么多的蛛丝马迹，那么多明明一件事就能看出他喜欢的人是她的真相，可我却是宁愿找借口自欺欺人，而今他给出坦白答案，他是放下了，才说出来，我是不是也该放下了，直到今日才明白我一个人自以为刻骨铭心的<a href="http://www.duwenzhang.com/huati/huiyi/index1.html">回忆</a>，他也许早就忘怀，他的短篇小说<a href="http://www.duwenzhang.com/">故事</a>中我没有丝言片语，也许若干年后他回想起来的只是我的名字，我只是个戏子，在他的故事中流着自己的泪，一个于他<a href="http://www.duwenzhang.com/huati/qingchun/index1.html">青春</a>年华中不曾使他掀起过一丝波澜的模糊影子，而他不知道也永远不会知道，我的故事里他出现的很多，占了很多篇幅，我把他写进我的故事，因为他路过我心上，他踏着万千星河而来，又乘舟奔赴远方，我与春风皆过客，你携秋水揽星河。如今看来万般故事不过情伤，易水人去，明月如霜。</p>
<p>　　他是无意穿堂风，却偏偏孤据引山洪。我是垂眉摆渡翁，却独独偏爱哝。</p>
<p>　　忽然想起那年夏日毕业之际，我送他的藏头巧妙情诗，还有在QQ的匿名坦白说，还有我第一次鼓起<a href="http://www.duwenzhang.com/huati/yongqi/index1.html">勇气</a>隐晦的告白，毕业后我想着也许在我们笑着说再见时候深知再见遥遥无期，我想过叫他一起来学习预习新课，如今想想对我而言珍贵如斯，因为整整初中三年我都喜欢他，从始至终，从一开始和他一个组，就喜欢他。可是我也心里早已隐隐知道他喜欢的是另外一个人，我怕喜欢被他知道，也怕他不知道，又怕他装作不知道，总是假装不在意他，却总是留意他的消息，其实也是只要他没有说出来证实那个我知道他喜欢另外一个人的猜想，我就还抱着一丝期待，才没办法停止喜欢。这世上最安慰人的童话是，你挖空心思<a href="http://www.duwenzhang.com/huati/anlian/index1.html">暗恋</a>的人，他也挖空心思暗恋你，可惜这只是童话。</p>
<p>　　我记得我无数次点开对话框，却只好<a href="http://www.duwenzhang.com/huati/shiwang/index1.html">失望</a>的再关掉。我好多时候都想着万一他真的喜欢是她，我应该狠下心割舍这份<a href="http://www.duwenzhang.com/huati/ganqing/index1.html">感情</a>，毕竟我不想太黯然神伤，我总是假装不在意远离他，不是因为讨厌陌生，而是太喜欢，又怕表现的明显，明知道没有什么可能不想陷入的更深。有那么一些瞬间，我假装不在意的擦肩而过，恰好离他很近，几分毫之差，却像是我们之间隔了银河的距离。走不进他的世界，却不想退出，现在想想初中三年除了开始在一个小组过，就没有再怎么交集过多少，毕业后反倒可以频繁的交集，我很<a href="http://www.duwenzhang.com/huati/zhenxi/index1.html">珍惜</a>，也行对他而言不过尔尔，充其量我只能算是他一个普通<a href="http://www.duwenzhang.com/huati/pengyou/index1.html">朋友</a>。</p>
<p>　　犹记得那次初三模考后不好，本来就难受从未那么差过，可是他在安慰另外一个人，我就更<a href="http://www.duwenzhang.com/huati/nanguo/index1.html">难过</a>。多少次狠下心不想喜欢，却是告终。</p>
<p>　　比如毕业后，我开着玩笑跟他要<a href="http://www.duwenzhang.com/huati/shengri/index1.html">生日</a>礼物，终究是一纸空话，而我也知道也许他是不想给也就罢了，毕竟我什么都算不上吧，还有我那次想叫他去看电影，看最好的我们，我是有目的，听说电影的最后彩蛋是告白带来这里一起看电影的人是为了对他告白，可惜他没去，我和我一个很好的闺蜜去了电影院。</p>
<p>　　其实毕业后，我有过暗示，他懂了，懂了后是<a href="http://www.duwenzhang.com/huati/chenmo/index1.html">沉默</a>，我早该明白的，沉默就是答案，躲闪就是答案，不过是留一个情面给我，互相都不要太过难堪，他也不知道，我很多说说<a href="http://www.duwenzhang.com/wenzhang/xinqingriji/">日志</a>写着是<a href="http://www.duwenzhang.com/huati/xiwang/index1.html">希望</a>他能看到的，虽然有些不是我的原创，却带着我的心声，他不曾懂过。也不需要去懂了，从始至终<a href="http://www.duwenzhang.com/huati/gandong/index1.html">感动</a>的只有我自己。海底月捞不起，心上人不可及，向来心是看客心，奈何人是局中人。</p>
<p>　　这世间最难不过徒手摘月，喜欢而不得。</p>
<p>　　但我也想明白了，当我不能将一个人彻底忘却，就好好珍藏，封存在某个不易察觉的角落，午夜阑珊的时候悄悄想去。生不逢时，喜欢不逢人，所得之处皆是命数。白茶清欢无别事，我在等风也等你，苦酒折留今相离，无风无月也无你。</p>
<p>　　当年我说的凤囚凰那首诗也许他早已忘记，有美人兮，见之不忘，一日不见兮，思之如狂。凤飞遨翔兮，四海求凰，<a href="http://www.duwenzhang.com/huati/wunai/index1.html">无奈</a>佳人兮，不在东墙。将琴代语兮，聊写衷肠，愿言配德兮，携手相将。何时见许兮，慰我旁徨，不得于飞兮，使我沦亡，使我沦亡。本想暗示他我喜欢过他，终是没有说出口下阙。</p>
<p>　　蝴蝶很美，终究飞不过沧海，某些性质上我和他一样，都是<a href="http://www.duwenzhang.com/huati/neixin/index1.html">内心</a>远没有看起来的风平浪静，实则是波涛起伏，曾想过愿我如星君如月，夜夜流光相皎洁。</p>
<p>　　所谓执念，不过求而不得，不过难以割舍，不想<a href="http://www.duwenzhang.com/huati/cuoguo/index1.html">错过</a>，可终究情深是我，缘浅是我们，落花有意，流水无情，竟是付诸东流，若是如此，就这样吧，从此山水不相逢，愿若干年后的我们是最好的我们，蝴蝶很美，终究飞不过沧海，生生的两端，我们彼此站成岸。何来人间一惊鸿，不过人间一俗人。从此相忘江湖，若许不相识，也愿我遇到比你更好的人，说了那么多轻松多了，写下这些也是为了忘记放下他，虽然以前想过有时候放不下是最好的放下，无论他是否看得到，就这样吧，至此纪念我初中的喜欢，你是年少的欢喜，但也是过去时。我也要<a href="http://www.duwenzhang.com/huati/nuli/index1.html">努力</a>学习，考的比他更好。</p>
</div></td>
</tr>
<tr>
  <td><script type="text/javascript" src="http://www.duwenzhang.com/plus/contactauthor.php?aid=414155&amp;writer=柳天琴&amp;tid=13&amp;tid2=0"></script></td>
</tr>
<tr align="center"> 
 <td height="40" colspan="2" class="prenext"><div class="endad" id="gad4"><iframe id="iframe295372_0" name="iframe295372_0" src="https://pos.baidu.com/xcym?conwid=468&amp;conhei=60&amp;rtbid=2056748&amp;rdid=9223372032564375000&amp;dc=2&amp;exps=110011&amp;psi=3cd544d6781eeed1125c7f3c234b167d&amp;di=295372&amp;dri=0&amp;dis=0&amp;dai=0&amp;ps=1474x149&amp;enu=encoding&amp;ant=0&amp;dcb=___adblockplus_&amp;dtm=HTML_POST&amp;dvi=0.0&amp;dci=-1&amp;dpt=none&amp;tsr=0&amp;tpr=1592898131786&amp;ti=%E7%BB%88%E6%98%AF%E6%97%A0%E7%BC%98%E4%B8%80%E5%88%AB%E4%B8%A4%E6%AC%A2%20-%E7%BE%8E%E6%96%87%E6%95%85%E4%BA%8B-%E6%95%A3%E6%96%87%E6%97%A5%E5%BF%97%E9%9A%8F%E7%AC%94-%20%E6%96%87%E7%AB%A0%E9%98%85%E8%AF%BB%E7%BD%91&amp;ari=2&amp;ver=0603&amp;dbv=2&amp;drs=1&amp;pcs=1185x907&amp;pss=1185x1704&amp;cfv=0&amp;cpl=3&amp;chi=1&amp;cce=true&amp;cec=GBK&amp;tlm=1590236883&amp;prot=2&amp;rw=907&amp;ltu=http%3A%2F%2Fwww.duwenzhang.com%2Fwenzhang%2Faiqingwenzhang%2Fshanggan%2F20200410%2F414155.html&amp;ltr=http%3A%2F%2Fwww.duwenzhang.com%2F&amp;ecd=1&amp;uc=1920x1040&amp;pis=-1x-1&amp;sr=1920x1080&amp;tcn=1592898132&amp;qn=143b76239061e4fe&amp;tt=1592898131743.50.203.204" width="468" height="60" align="center,center" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" style="border:0;vertical-align:bottom;margin:0;width:468px;height:60px" allowtransparency="true"></iframe></div>上一篇：<a href="http://www.duwenzhang.com/wenzhang/aiqingwenzhang/shanggan/20191107/409343.html">错过的终究放下</a>   &nbsp; 下一篇：没有了 
 </td>
</tr>
</tbody></table></td>
</tr>
<tr> 
<td height="28" align="center" style="border-top:1px dashed #0581E1"> 
<table width="100%" border="0" cellpadding="1" cellspacing="1">
<form action="http://www.duwenzhang.com/plus/feedback.php?arcID=414155&amp;action=send" method="post" name="feedback"></form>
<input type="hidden" name="action" value="send">
<input type="hidden" name="comtype" value="comments">
<input type="hidden" name="aid" value="414155">
<input type="hidden" name="isconfirm" value="yes">
<input type="hidden" name="feedbacktype" value="good" id="dcmp-stand-good">
<tbody><tr> 
<td style="color:#40388A"><div class="dcmp-userinfo" id="_ajax_feedback"><input name="notuser" type="hidden" id="notuser" value="1">游客评论无需登录。您也可以<a href="http://www.duwenzhang.com/member/" target="_blank"><u>登陆</u></a>后再评论。&nbsp;<button type="button" name="fabiao2" onclick="checkSubmit()" style="width:70;height:25">发表感言</button>

</div>
<script type="text/javascript">CheckLogin();</script></td>
<td style="color:#40388A">[<a href="http://www.duwenzhang.com/plus/stow.php?aid=414155" target="_blank"><img src="http://www.duwenzhang.com/plus/img/file_move.gif" width="17" height="18" border="0"><u>收藏本文</u></a>]
</td>
</tr>
<tr> 
<td colspan="2" style="color:#40388A">发表读后感：</td>
</tr>
<tr> 
<td colspan="2"><textarea name="msg" cols="75" rows="3" id="msg" style="width:98%"></textarea></td>
</tr>

</tbody></table></td>
</tr>
<tr> 
<td valign="top"> <table width="100%" border="0" cellpadding="1" cellspacing="1">

<tbody><tr> 
<td height="20" colspan="2" bgcolor="#FFFFFF">
	<script src="http://www.duwenzhang.com/plus/feedback_js.php?aid=414155"></script>
</td>
</tr>
</tbody></table></td>
</tr>
</tbody></table>
    </td>`;
let a = str.match(/[\u4e00-\u9fa5]/g);//匹配中文字符
let b = str.replace(/<.*?>|\[.*?\]|\&nbsp;|[\s\n]/g, "");
console.log(b);



