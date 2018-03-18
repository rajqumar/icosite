  <!-- Trigger the modal with a button -->
  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header" style="background: #0fb9b1;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/368px-Ethereum_logo_2014.svg.png" width="52px">
        <h4 class="modal-title" style="color:black;font-weight: 600;font-size: 35px !important;/* margin-right: 45px; */margin-left: -162px;">Wallet Address</h4>
        </div>
        <div class="modal-body">
          <p style="text-align: center;color: #2c3e50;
    font-weight: 600;">{{ $customize[0]->ethereum_address }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" style="background: #e55039;color: white;" data-dismiss="modal"><i class="fas fa-times"></i></button>
        </div>
      </div>
    </div>
</div>

  <div class="modal fade" id="ripple" role="dialog">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header" style="background: #0fb9b1;">
        <img src="https://cdn.worldvectorlogo.com/logos/ripple-2.svg" width="52px">
        <h4 class="modal-title" style="color:black;line-height:0.5;font-weight: 600;font-size: 35px !important;/* margin-right: 45px; */margin-left: -162px;">Wallet Address</h4>
        </div>
        <div class="modal-body">
          <p style="text-align: center;color: #2c3e50;
    font-weight: 600;">{{ $customize[0]->ripple_address }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" style="background: #e55039;color: white;" data-dismiss="modal"><i class="fas fa-times"></i></button>
        </div>
      </div>
    </div>
</div>

<div class="modal fade" id="bitcoin" role="dialog">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header" style="background: #0fb9b1;">
        <img src="http://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png" width="52px">
        <h4 class="modal-title" style="color:black;line-height:0.5;font-weight: 600;font-size: 35px !important;/* margin-right: 45px; */margin-left: -162px;">Wallet Address</h4>
        </div>
        <div class="modal-body">
          <p style="text-align: center;color: #2c3e50;
    font-weight: 600;">{{ $customize[0]->bitcoin_address }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" style="background: #e55039;color: white;" data-dismiss="modal"><i class="fas fa-times"></i></button>
        </div>
      </div>
    </div>
</div>

<div class="modal fade" id="litecoin" role="dialog">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header" style="background: #0fb9b1;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Official_Litecoin_Logo.png" width="52px">
        <h4 class="modal-title" style="color:black;line-height:0.5;font-weight: 600;font-size: 35px !important;/* margin-right: 45px; */margin-left: -162px;">Wallet Address</h4>
        </div>
        <div class="modal-body">
          <p style="text-align: center;color: #2c3e50;
    font-weight: 600;">{{ $customize[0]->litecoin_address }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" style="background: #e55039;color: white;" data-dismiss="modal"><i class="fas fa-times"></i></button>
        </div>
      </div>
    </div>
</div>

<footer id="footer" class="footer style_2">

    <div class="widgets_row">
        <div class="container">
            <div class="footer_widgets">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="footer_logo">
                            <a href="{{ url('/') }}">
                                <img src="{{ $header[0]->site_logo }}"
                                     alt="ICO Landing Page"/>
                            </a>
                        </div>
                        <div class="footer_text">
                            <p>{{ $footer[0]->footerdesc }}</p>
                        </div>
                        <div class="socials">
                            <ul>
                                <?php

                                if($footer[0]->facebook != 'none'){?> 
                                <li>
                                    <a href="{{ $footer[0]->facebook }}" target="_blank" class="social-facebook">
                                                                    <i class="fa fa-facebook"></i>
                                                                </a>
                                </li>
                                <?php } ?>
                                
                                <?php

                                if($footer[0]->twitter != 'none'){?> 

                                <li>
                                    <a href="{{ $footer[0]->twitter }}" target="_blank" class="social-twitter">
                                                                    <i class="fa fa-twitter"></i>
                                                                </a>
                                </li>
                                <?php } ?>
                                
                                <?php

                                if($footer[0]->linkedin != 'none'){?> 

                                <li>
                                    <a href="{{ $footer[0]->linkedin }}" target="_blank" class="social-linkedin">
                                                                    <i class="fa fa-linkedin"></i>
                                                                </a>
                                </li>
                                <?php } ?>
                                
                                <?php

                                if($footer[0]->github != 'none'){?> 
                                
                                <li>
                                    <a href="{{ $footer[0]->github }}" target="_blank" class="social-github">
                                                                    <i class="fa fa-github"></i>
                                                                </a>
                                </li>
                                <?php } ?>
                                
                                <?php

                                if($footer[0]->instagram != 'none'){?> 

                                <li>
                                    <a href="{{ $footer[0]->instagram }}" target="_blank" class="social-instagram">
                                                                    <i class="fa fa-instagram"></i>
                                                                </a>
                                </li>
                                <?php } ?>
                                
                                <?php

                                if($footer[0]->bitcointalk != 'none'){?> 

                                <li>
                                    <a href="{{ $footer[0]->bitcointalk }}" target="_blank" class="social-github">
                                                                    <i class="fa fa-bitcoin"></i>
                                                                </a>
                                </li>
                                <?php } ?>
                                
                                <?php

                                if($footer[0]->reddit != 'none'){?> 

                                <li>
                                    <a href="{{ $footer[0]->reddit }}" target="_blank" class="social-reddit">
                                                                    <i class="fa fa-reddit"></i>
                                                                </a>
                                </li>
                                <?php } ?>
                                
                                <?php

                                if($footer[0]->telegram != 'none'){?> 

                                <li>
                                    <a href="{{ $footer[0]->telegram }}" target="_blank" class="social-telegram">
                                                                    <i class="fa fa-telegram"></i>
                                                                </a>
                                </li>
                                <?php } ?>
                            </ul>
                        </div>
                        <section id="text-5" class="widget widget_text">
                            <div class="textwidget"></div>
                        </section>
                    </div><!-- 
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <section id="nav_menu-2" class="widget widget_nav_menu">
                            <h4 class="widget_title no_stripe">Additional pages</h4>
                            <div class="menu-extra-pages-container">
                                <ul id="menu-extra-pages" class="menu">
                                    <li id="menu-item-3746" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3746"><a href="#">History</a></li>
                                    <li id="menu-item-3747" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3747"><a href="#">Appointment</a></li>
                                    <li id="menu-item-3748" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3748"><a href="#">Approach</a></li>
                                    <li id="menu-item-3749" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3749"><a href="#">Events</a></li>
                                    <li id="menu-item-3750" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3750"><a href="#">Partners</a></li>
                                    <li id="menu-item-3751" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3751"><a href="#">Portfolio</a></li>
                                    <li id="menu-item-3752" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3752"><a href="#">Careers</a></li>
                                    <li id="menu-item-3753" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3753"><a href="#">Testimonials</a></li>
                                    <li id="menu-item-3754" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3754"><a href="#">Team</a></li>
                                    <li id="menu-item-3755" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3755"><a href="#">Typography</a></li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <section id="recent-posts-4" class="widget widget_recent_entries">
                            <h4 class="widget_title no_stripe">Recent Posts</h4>
                            <ul>
                                <li>
                                    <a href="http://crypterio.stylemixthemes.com/ico/first-long-term-bitcoin-option-price-of-10000-launched-by-stmx/">First Long-Term Bitcoin Option Price of $10,000 Launched by STMX</a>
                                    <span class="post-date">January 20, 2018</span>
                                </li>
                                <li>
                                    <a href="http://crypterio.stylemixthemes.com/ico/stmx-dht-ico-risk-hedging-crypto-trading-for-investors/">STMX – DHT ICO Risk Hedging Crypto Trading For Investors?</a>
                                    <span class="post-date">January 20, 2018</span>
                                </li>
                            </ul>
                        </section>
                    </div> -->
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <section id="text-2" class="widget widget_text">
                            <h4 class="widget_title no_stripe">Subscribe</h4>
                            <div class="textwidget">
                                <div class="footer_subscribe">Sign up for Alerts, Special Offers, Education and Updates.</div>
                            </div>
                        </section>
                        <section id="mc4wp_form_widget-2" class="widget widget_mc4wp_form_widget">
                            <script type="text/javascript">
                                (function() {
                                    if (!window.mc4wp) {
                                        window.mc4wp = {
                                            listeners: [],
                                            forms    : {
                                                on: function (event, callback) {
                                                    window.mc4wp.listeners.push({
                                                        event   : event,
                                                        callback: callback
                                                    });
                                                }
                                            }
                                        }
                                    }
                                })();
                            </script>
                            <form action="/subscribe" id="mc4wp-form-1" class="mc4wp-form mc4wp-form-3756" method="post">
                                {{ csrf_field() }}
                                <div class="mc4wp-form-fields">
                                    <div class="stm_newsletter_form">
                                        <input class="form-control" type="email" name="email_address" placeholder="Enter Your E-mail" required />
                                        <br>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="copyright_row">
        <div class="container">
            <div class="copyright_row_wr">
                <div class="copyright">
                    Copyright © 2018 <a href="{{ url('/') }}" target="_blank">{{ $footer[0]->copyright }}</a></div>
            </div>
        </div>
    </div>
</footer>
</div>
<link rel='stylesheet' id='vc_google_fonts_abril_fatfaceregular-css' href='//fonts.googleapis.com/css?family=Abril+Fatface%3Aregular&#038;ver=4.9.2' type='text/css' media='all' />
<link rel='stylesheet' id='owl.carousel-css' href='http://crypterio.stylemixthemes.com/ico/wp-content/themes/crypterio/assets/css/owl.carousel.css?ver=1.7' type='text/css' media='all' />
<link rel='stylesheet' id='animate-css-css' href='http://crypterio.stylemixthemes.com/ico/wp-content/plugins/js_composer/assets/lib/bower/animate-css/animate.min.css?ver=5.4.5' type='text/css' media='all' />
<script type='text/javascript'>
    /* <![CDATA[ */
    var wpcf7 = {"apiSettings":{"root":"http:\/\/crypterio.stylemixthemes.com\/ico\/wp-json\/contact-form-7\/v1","namespace":"contact-form-7\/v1"},"recaptcha":{"messages":{"empty":"Please verify that you are not a robot."}}};
    /* ]]> */
</script>
<script type='text/javascript' src='http://crypterio.stylemixthemes.com/ico/wp-content/plugins/contact-form-7/includes/js/scripts.js?ver=4.9.2'></script>
<script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js?ver=1.5.6'></script>
<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/money.js/0.2.0/money.min.js?ver=0.2.0'></script>

<script type='text/javascript' src='http://crypterio.stylemixthemes.com/ico/wp-content/plugins/virtual_coin_widgets/js/vcw.min.js?ver=1.1'></script>
<script type='text/javascript' src='http://crypterio.stylemixthemes.com/ico/wp-content/plugins/virtual_coin_widgets/js/loader.js?ver=1.1'></script>
<script type='text/javascript' src='http://crypterio.stylemixthemes.com/ico/wp-content/themes/crypterio/assets/js/bootstrap.min.js?ver=1.7'></script>
<script type='text/javascript' src='http://crypterio.stylemixthemes.com/ico/wp-content/themes/crypterio/assets/js/select2.min.js?ver=1.7'></script>
<script type='text/javascript' src='http://crypterio.stylemixthemes.com/ico/wp-content/themes/crypterio/assets/js/custom.js?ver=1.7'></script>
<script type='text/javascript' src='http://crypterio.stylemixthemes.com/ico/wp-content/plugins/pearl-header-builder/assets/frontend/assets/js/app.js?ver=1.0'></script>
<script type='text/javascript' src='http://crypterio.stylemixthemes.com/ico/wp-includes/js/wp-embed.min.js?ver=4.9.2'></script>
<script type='text/javascript' src='http://crypterio.stylemixthemes.com/ico/wp-content/plugins/js_composer/assets/js/dist/js_composer_front.min.js?ver=5.4.5'></script>
<script type='text/javascript' src='http://crypterio.stylemixthemes.com/ico/wp-content/themes/crypterio/assets/js/particles.min.js?ver=1.7'></script>
<script type='text/javascript' src='http://crypterio.stylemixthemes.com/ico/wp-content/themes/crypterio/assets/js/jquery.countdown.js?ver=1.7'></script>
<script type='text/javascript' src='http://crypterio.stylemixthemes.com/ico/wp-content/themes/crypterio/assets/js/owl.carousel.min.js?ver=1.7'></script>
<script type='text/javascript' src='http://crypterio.stylemixthemes.com/ico/wp-content/plugins/js_composer/assets/lib/waypoints/waypoints.min.js?ver=5.4.5'></script>
<script type='text/javascript' src='http://crypterio.stylemixthemes.com/ico/wp-content/plugins/js_composer/assets/lib/bower/isotope/dist/isotope.pkgd.min.js?ver=5.4.5'></script>
<script type='text/javascript' src='http://crypterio.stylemixthemes.com/ico/wp-content/plugins/js_composer/assets/lib/bower/chartjs/Chart.min.js?ver=5.4.5'></script>
<script type='text/javascript' src='http://crypterio.stylemixthemes.com/ico/wp-content/plugins/js_composer/assets/lib/vc_round_chart/vc_round_chart.min.js?ver=5.4.5'></script>
<script type='text/javascript'>
    /* <![CDATA[ */
    var mc4wp_forms_config = [];
    /* ]]> */
</script>
<script type='text/javascript' src='http://crypterio.stylemixthemes.com/ico/wp-content/plugins/mailchimp-for-wp/assets/js/forms-api.min.js?ver=4.1.14'></script>
</body>
<script type="text/javascript">
jQuery(document).ready(function() {
 
var offset = 250;
 
var duration = 300;
 
jQuery(window).scroll(function() {
 
if (jQuery(this).scrollTop() > offset) {
 
jQuery('.back-to-top').fadeIn(duration);
 
} else {
 
jQuery('.back-to-top').fadeOut(duration);
 
}
 
});
 
 
 
jQuery('.back-to-top').click(function(event) {
 
event.preventDefault();
 
jQuery('html, body').animate({scrollTop: 0}, duration);
 
return false;
 
})
 
});
</script>
</html>